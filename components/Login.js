import * as React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import firebase from '../config/config';
import styles from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';

// Aqui vai ser feito o login, e o cadastro. Porém será exibido todos os curriculos e a pessoa poderá selecionar para logar e na aba de login terá a opção de cadastro.
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      senha: undefined,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(texto) =>
            this.setState({ username: texto })
          }></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(texto) => this.setState({ senha: texto })}></TextInput>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Cadastro')}>
          <Text style={styles.selected}> Cadastrar</Text>
        </TouchableOpacity>
        <Button
          style={styles.button}
          title="Logar"
          onPress={() => this.logar()}></Button>
      </View>
    );
  }

  // Função para logar
  async logar() {
    const userRef = firebase
      .database()
      .ref('usuarios')
      .orderByChild('username')
      .equalTo(this.state.username);
    await userRef.once('value', (snapshot) => {
      if (snapshot.exists()) {
        const user = snapshot.val();
        // Verifica se a senha é válida
        if (user[Object.keys(user)[0]].senha === this.state.senha) {
          // Login bem-sucedido
          console.log('Usuário logado com sucesso!');
            AsyncStorage.setItem('username',this.state.username);
          this.props.navigation.navigate('Logado');
        } else {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)//faz vibrar
          alert('Senha incorreta');
        }
      } else {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)//faz vibrar
        alert('Usuário não encontrado');
      }
    });
  }
}

export default Login;
