import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
// import auth from '@react-native-firebase/auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../config/config';
import styles from './Styles';
import Cadastro from './Cadastro';

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// const
//  Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       await auth().signInWithEmailAndPassword(email, password);

//       // Successful login, navigate to the desired screen
//       console.log('User logged in successfully!');
//       // Replace 'HomeScreen' with your desired screen name
//       this.props.navigation.navigate('HomeScreen');
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Login Failed', error.message);
//     }
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Email"
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={(text)
//  => setPassword(text)}
//       />
//       <Button
//  title="Login" onPress={handleLogin} />
//     </View>
//   );
// };
// Aqui vai ser feito o login, e o cadastro. Porém será exibido todos os curriculos e a pessoa poderá selecionar para logar e na aba de login terá a opção de cadastro.
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: undefined,
      senha: undefined,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(texto) => this.setState({ usuario: texto })}>
        </TextInput>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(texto) =>
    this.setState({ senha: texto })
  }>
        </TextInput>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Cadastro')}>
          <Text style={styles.selected}> Cadastrar</Text>
        </TouchableOpacity>
        <Button style={styles.button} title="Logar" onPress={() => this.ler()}></Button>
      </View>
    );
  }

  // Mudar o assyncStorage para o firebase
  async ler() {
    try {
      let senha = await AsyncStorage.getItem(this.state.usuario); //tentando pegar oq ta no usuario (to no login ent eh a senha)
      if (senha != null) {
        if (senha == this.state.senha) {
          alert('Logado!!!');
          this.props.navigation.navigate('Logado');
        } else {
          alert('Senha Incorreta!');
        }
      } else {
        alert('Usuário não foi encontrado!');
      }
    } catch (erro) {
      console.log(erro);
    }
  } //tudo que ta embaixo continua a ser executado independente do ler, se fosse await espera acontecer o wait pro de baixo ocorrer
}

// <TouchableOpacity style={styles.datePickerButton} onPress={showDatePicker}>
//     <Text > Cadastrar</Text>
//   </TouchableOpacity>

// <Text>{' Usuário*'}</Text>
// <TextInput
//   onChangeText={(texto) =>
//     this.setState({ usuario: texto })
//   }></TextInput>
// <Text>{' Senha*'}</Text>
// <TextInput
//   onChangeText={(texto) => this.setState({ senha: texto })}></TextInput>

export default Login;
