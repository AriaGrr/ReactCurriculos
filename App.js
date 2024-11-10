import * as React from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //novas
import {createTopTabNavigator} from '@react-navigation/top-tabs'; //novas
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack'; //novas
import { Card, Paragraph, Title } from 'react-native-paper';

// const TabBot = createBottomTabNavigator();

const Tab = createTopTabNavigator();

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f2f2f2', 
    borderRadius: 5, 
    borderWidth: 3,
    borderColor: '#333', 
    padding: 15,
    width: '80%',
    marginBottom: 30, 
  },
  buttonText: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16, 
  },
});

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
      <View>
        <Text>{' Usuário:'}</Text>
        <TextInput
          onChangeText={(texto) =>
            this.setState({ usuario: texto })
          }></TextInput>
        <Text>{' Senha:'}</Text>
        <TextInput
          onChangeText={(texto) => this.setState({ senha: texto })}></TextInput>
        <Button title="Logar" onPress={() => this.ler()}></Button>
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
          this.props.navigation.navigate('Filmes');
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

// Para cadastrar um novo usuário, e senha. Isso vai ser salvo no banco de dados, e a pessoa poderá logar com essas informações.
class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      password: undefined,
    };
  }

  // Mudar o assyncStorage para o firebase, onde vai ser gravado no banco de dados. E há opção de e-mail autenticado.
  async gravar() {
    try {
      await AsyncStorage.setItem(this.state.user, this.state.password);
      alert('Salvo com sucesso!!!');
    } catch (erro) {
      alert('Erro!');
    }
  }

  render() {
    return (
      <View>
        <Text>{' Usuário:'}</Text>
        <TextInput
          onChangeText={(texto) => this.setState({ user: texto })}></TextInput>
        <Text>{' Senha:'}</Text>
        <TextInput
          onChangeText={(texto) =>
            this.setState({ password: texto })
          }></TextInput>
        <Button title="Cadastrar" onPress={() => this.gravar()} />
      </View>
    );
  }
}

// Aqui vai ser a página principal, onde vai ser exibido todos os curriculos cadastrados, e a pessoa poderá selecionar um para olhar mais detalhes.
class Curriculos extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.buttonTest}
          onPress={() => this.props.navigation.navigate('Curriculo')}>
          <Text style={styles.buttonText}>Vingadores</Text>
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

// Aqui vai mostrar todos os curriculos cadastrados, e a pessoa poderá selecionar um para olhar mais detalhes. E vai ter a opção de logar e pesquisar, e na opção de login tera a opção de cadastrar.
class Principal extends React.Component {
  render() {
    return (
      <Tab.Navigator>
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
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
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
          <Stack.Screen name="Curriculos" component={Curriculos} />
          <Stack.Screen name="Curriculo" component={Curriculo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
