import * as React from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet, TouchableHighlight
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //novas
// import {createTabNavigator} from '@react-navigation/tabs'; //novas
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack'; //novas
import { Card, Paragraph, Title } from 'react-native-paper';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import firebase from './config/config'
// import Salvar from './components/Salvar'
import Login from './components/Login'
import styles from './components/Styles'
import Cadastro from './components/Cadastro'

const Tab = createBottomTabNavigator();

// const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

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


// // Para cadastrar um novo usuário, e senha. Isso vai ser salvo no banco de dados, e a pessoa poderá logar com essas informações.
// class Cadastro extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: undefined,
//       password: undefined,
//     };
//   }

//   // Mudar o assyncStorage para o firebase, onde vai ser gravado no banco de dados. E há opção de e-mail autenticado.
//   async gravar() {
//     try {
//       await AsyncStorage.setItem(this.state.user, this.state.password);
//       alert('Salvo com sucesso!!!');
//     } catch (erro) {
//       alert('Erro!');
//     }
//   }

//   render() {
//     return (
//       <View>
//         <Text>{' Usuário:'}</Text>
//         <TextInput
//           onChangeText={(texto) => this.setState({ user: texto })}></TextInput>
//         <Text>{' Senha:'}</Text>
//         <TextInput
//           onChangeText={(texto) =>
//             this.setState({ password: texto })
//           }></TextInput>
//         <Button title="Cadastrar" onPress={() => this.gravar()} />
//       </View>
//     );
//   }
// }


// class Login extends React.Component{
//   constructor(props){
//     super(props);
//     this.username = ""
//     this.senha = 0
//     this.nome = ""
//     this.email = ""
//     this.idade = 0
//   }

//   salvar(){
//     firebase.database().ref('/usuarios').push({
//       username: this.username,
//       senha: this.senha
//     })
//     alert("Logado com sucesso!")
//   }

//   render(){
//     return(
//       <View> 
//         <TextInput style={styles.input} 
//           placeholder="username"
//           onChangeText={(texto)=>{this.username = texto}}
//         />
//         <TextInput style={styles.input} 
//           placeholder="senha"
//           onChangeText={(texto)=>{this.senha = texto}}
//         />
//         <TouchableHighlight style={styles.botao} onPress={()=>this.salvar()}>
//           <Text  style={styles.txtBotao} >{"Logar"}</Text>
//         </TouchableHighlight>
//       </View>
//     )
//   }
// }

// Aqui vai ser a página principal, onde vai ser exibido todos os curriculos cadastrados, e a pessoa poderá selecionar um para olhar mais detalhes.
class Curriculos extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.buttonTest}
          onPress={() => this.props.navigation.navigate('Curriculo')}>
          <Text style={styles.buttonText}>Curriculo</Text>
        </TouchableOpacity>
      </View> //.navegate("nomeCurriculos");
    );
  }
}

// O curriculo geral vai ser exibido em forma de card, com o nome, a idade, o curso e a expeciencia profissional, o tipo de contrato que deseja, e o salario desejado, etc. E de forma onde as informações sejam puxadas do banco de dados.
class Curriculo extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Card>
          <Card.Title title="Sinopse" />
          <Card.Content>
            <Paragraph>
              {
                'Info'
              }
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

// Aqui vai ficar as informações do perfil da pessoa
class Perfil extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Card>
          <Card.Title title="Sinopse" />
          <Card.Content>
            <Paragraph>
              {
                'Info'
              }
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

// Aqui vai mostrar todos os curriculos cadastrados, e a pessoa poderá selecionar um para olhar mais detalhes. E vai ter a opção de logar e pesquisar, e na opção de login tera a opção de cadastrar.
class Principal extends React.Component {
  render() {
    return (
      <Tab.Navigator>
          <Tab.Screen
          name="Curriculos"
          component={Curriculos}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

// Aqui vai mostrar todos os curriculos cadastrados, e a pessoa poderá selecionar um para olhar mais detalhes. E vai ter a opção de logar e pesquisar, e na opção de login tera a opção de cadastrar.
class Logado extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Curriculos"
          component={Curriculos}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-account"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-plus"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

class App extends React.Component {
  //stack e stack navigator e as 2 telas que quero apresentar
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Principal"
            component={Principal}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Logado"
            component={Logado}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Curriculos" component={Curriculos} />
          <Stack.Screen name="Curriculo" component={Curriculo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
