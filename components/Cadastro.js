import * as React from 'react';
import {
  View,
  TextInput,
  Button,
} from 'react-native';
import firebase from '../config/config';
import styles from './Styles';
import * as Haptics from 'expo-haptics';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.nome = '';
    this.username = '';
    this.senha = 0;
  }

salvar() {
    // Compara o usuario que quer cadastrar com os usuarios do banco pra ver se já existe
    const user = this.username;
    const userRef = firebase.database().ref('usuarios').orderByChild('username').equalTo(user);
    userRef.once('value', (snapshot) => {
      if (snapshot.exists()) {
        // Usuário já existe
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)//faz vibrar
        alert(
          'Usuário já existe',
          'Por favor, escolha outro nome de usuário.'
        );
      } else {
        // Criar o usuário
        firebase.database().ref('/usuarios').push({
          nome: this.nome,
          username: this.username,
          senha: this.senha,
          foto: '',
          email: '',
          sobre: '',
          curso: '',
          semestre: 0,
          interesse: '',
        });
        alert('Usuario cadastrado!');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          onChangeText={(texto) => {
            this.nome = texto;
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(texto) => {
            this.username = texto;
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(texto) => {
            this.senha = texto;
          }}
        />
        <Button
          style={styles.button}
          title="Cadastrar"
          onPress={() => this.salvar()}
        />
      </View>
    );
  }
}

export default Cadastro;
