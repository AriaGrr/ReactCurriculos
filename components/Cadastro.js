import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  DatePickerAndroid,
  Text,
  TouchableOpacity,
} from 'react-native';
import firebase from '../config/config';
import styles from './Styles';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore, doc, setDoc } from 'firebase/firestore';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.nome = '';
    this.username = '';
    this.senha = 0;
  }

  salvar() {
    
    firebase.database().ref('/usuarios').push({
      nome: this.nome,
      username: this.username,
      senha: this.senha,
      foto: null,
      email: "",
      sobre: "",
      curso: "",
      semestre: 0,
      interesse: "",
    });
    alert('Usuario cadastrado!');
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
// const Cadastro = () => {
// const [nome, setNome] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const handleSignUp = async () => {
//   try {
//     const auth = getAuth(firebase);
//     await createUserWithEmailAndPassword(auth, email, password).then(
//       (userCredential) => {
//         const user = userCredential.user;
//         console.log('Usuario criado: ', user);

//         // // Obter uma referência ao banco de dados Firestore
//         const db = getFirestore(firebase);

//         // Criar uma referência ao documento do usuário
//         const userRef = doc(db, 'users', user.uid);

//         // Setar os dados do usuário
//         setDoc(userRef, {
//           nome: nome,
//           idade: "",
//           foto: null,
//           sobre: "",
//         })
//           .then(() => {
//             console.log('Dados do usuário salvos com sucesso');
//           })
//           .catch((error) => {
//             console.error('Erro ao salvar dados do usuário:', error);
//           });

//         // Navegar para a tela desejada após o cadastro
//         this.props.navigation.navigate('Login');
//       }
//     );
//     // ... (restante do tratamento de erros)
//   } catch (error) {
//     // ... (tratamento de erros)
//     console.error('Erro ao salvar o usuario:', error);
//     Alert.alert('Erro ao salvar dados', 'Por favor, tente novamente mais tarde.');
//   }
// };

export default Cadastro;
