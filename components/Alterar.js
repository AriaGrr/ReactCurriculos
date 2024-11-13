import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import firebase from '../config/config';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardEdit from './CardEditavel';
import * as Haptics from 'expo-haptics';

class Alterar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userId: null,
    };
  }

// Buscar o ID do usuário pelo username
  async findUserIdByUsername(username) {
    try {
      const usersRef = firebase.database().ref('usuarios');
      const snapshot = await usersRef
        .orderByChild('username')
        .equalTo(username)
        .once('value');

      if (snapshot.exists()) {
        const users = snapshot.val();
        return Object.keys(users)[0];
      } else {
        throw new Error('Usuário não encontrado');
      }
    } catch (error) {
      console.error('Erro ao buscar usuário por username:', error);
      throw error;
    }
  }

  // Buscar o usuário atual
  componentDidMount() {
    const fetchUser = async () => {
      try {
        const username = await AsyncStorage.getItem('username');
        const userId = await this.findUserIdByUsername(username);
        this.setState({ userId }); // Colocar o ID no estado

        const userRef = firebase.database().ref(`usuarios/${userId}`);
        userRef.on('value', (snapshot) => {
          if (snapshot.exists()) {
            this.setState({ user: snapshot.val() });
          } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); //faz vibrar
            console.error('Usuário não encontrado');
          }
        });
      } catch (error) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); //faz vibrar
        console.error('Erro ao buscar usuário:', error);
      }
    };

    fetchUser();
  }

  // Limpar o listener para evitar vazamentos de memória
  componentWillUnmount() {
    const { userId } = this.state;
    if (userId) {
      const userRef = firebase.database().ref(`usuarios/${userId}`);
      userRef.off('value');
    }
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return (
        <View style={styles.container}>
          <Text>Carregando...</Text>
        </View>
      );
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <CardEdit user={user} navigation={this.props.navigation}/>
        </View>
      </ScrollView>
    );
  }
}

export default Alterar;
