import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  DatePickerAndroid,
  Text, TouchableOpacity
} from 'react-native';
import firebase from '../config/config';
import styles from './Styles'
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore, doc, setDoc } from
//  'firebase/firestore';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  // const [dataNascimento, setDataNascimento] = useState('');
  // const showDatePicker = async () => {
  //   try {
  //     const { action, year, month, day } = await DatePickerAndroid.open({
  //       // ... Configurações do DatePicker
  //       date: new Date(),
  //       minDate: new Date(1900, 1, 1),
  //       mode: 'date',
  //     });
  //     if (action !== DatePickerAndroid.dismissedAction) {
  //       // Definir a data escolhida
  //       setDataNascimento(new Date(year, month, day));
  //     }
  //   } catch ({ code, message }) {
  //     console.warn('Não é possivel abrir calendario', message);
  //   }
  // };
  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log('Usuario criado: ', user);

          // Obter uma referência ao banco de dados Firestore
          const db = getFirestore();

          // Criar uma referência ao documento do usuário
          const userRef = doc(db, 'users', user.uid);

          // Setar os dados do usuário
          setDoc(userRef, {
            nome: nome,
            idade: "",
            foto: null,
            sobre: "",
          })
            .then(() => {
              console.log('Dados do usuário salvos com sucesso');
            })
            .catch((error) => {
              console.error('Erro ao salvar dados do usuário:', error);
            });

          // Navegar para a tela desejada após o cadastro
          this.props.navigation.navigate('Login');
        }
      );
      // ... (restante do tratamento de erros)
    } catch (error) {
      // ... (tratamento de erros)
      console.error('Erro ao salvar o usuario:', error);
    Alert.alert('Erro ao salvar dados', 'Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
  <TextInput
    style={styles.input}
    placeholder="Nome completo"
    onChangeText={(text) => setNome(text)}
    value={nome}
  />
  <TextInput
    style={styles.input}
    placeholder="E-mail"
    onChangeText={(text) => setEmail(text)}
    value={email}
  />
    <TextInput
    style={styles.input}
    placeholder="Senha"
    onChangeText={(text) => setPassword(text)}
    value={password}
  />
      <Button style={styles.button}
        title="Cadastrar"
        onPress={() => handleSignUp(email, password, nome, dataNascimento)}
      />
    </View>
  );
};

export default Cadastro;
