import * as React from 'react';
// import {
//   TextInput,
//   Text,
//   View,
//   Button,
//   TouchableOpacity,
//   StyleSheet,
//   TouchableHighlight,
// } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //novas
// import {createTabNavigator} from '@react-navigation/tabs'; //novas
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack'; //novas
// import { Card, Paragraph, Title } from 'react-native-paper';
// import firebase from './config/config';
// import styles from './components/Styles';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Listar from './components/Listar';
import Buscar from './components/Buscar';
import Alterar from './components/Alterar';
import UserCard from './components/Card';
import CardEdit from './components/CardEditavel';

const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

// Aqui vai mostrar todos os curriculos cadastrados, e a pessoa poderá selecionar um para olhar mais detalhes. E vai ter a opção de logar e pesquisar, e na opção de login tera a opção de cadastrar.
class Principal extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Curriculos"
          component={Listar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="card-text"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Pesquisar"
          component={Buscar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="card-search"
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
                name="account"
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
          component={Listar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="card-text"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Pesquisar"
          component={Buscar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="card-search"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Alterar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
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
  //stack e stack navigator e as telas a serem apresentadas
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
          <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Perfil"
            component={Alterar}
            options={{ headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Curriculos"
            component={Listar}
            options={{ headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Card"
            component={UserCard}
            options={{ headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Alterar"
            component={CardEdit}
            options={{ headerTitleAlign: 'center' }}
          />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerTitleAlign: 'center' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
