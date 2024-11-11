import * as React from 'react';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  // button: {
  //   backgroundColor: '#f2f2f2', 
  //   borderRadius: 5, 
  //   borderWidth: 3,
  //   borderColor: '#333', 
  //   padding: 15,
  //   width: '80%',
  //   marginBottom: 30, 
  // },
  // buttonText: {
  //   textAlign: 'center',
  //   color: '#333',
  //   fontSize: 16, 
  // },
  //   txtBotao: {
  //   color: "black",
  //   fontSize: 25,
  //   alignSelf: "center"
  // },
  // botao: {
  //   height: 50,
  //   borderWidth: 1,
  //   borderColor: 'gray',
  //   backgroundColor: "cyan",
  //   margin: 10,
  //   borderRadius: 8,
  //   padding: 5,
  // },
  // input: {
  //   height: 50,
  //   padding: 5,
  //   fontSize: 25,
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   margin: 10,
  //   borderRadius: 8
  // },
    container: {
    flex: 1,
    backgroundColor: '#f2f2f2', // Fundo escuro
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'white', // Fundo dos inputs um pouco mais claro que o fundo
    borderColor: '#555', // Borda dos inputs
    borderWidth: 1,
    marginBottom: 10,
    color: 'black', // Texto branco para contraste: #fff
    paddingHorizontal: 10,
  },
  label: {
    color: '#888', // Rótulo dos campos com cor mais clara
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#333', // Botão um pouco mais escuro que os inputs
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red', // Mensagem de erro em vermelho para destaque
  },
  iconButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    color: '#fff',
  },
  // line: {
  //   borderBottomWidth: 1,
  //   borderColor: '#ccc',
  //   padding: 10,
  // },
  // selectedLine: {
  //   backgroundColor: '#f0f0f0',
  // },
  selected: {
    textDecorationLine: 'underline',
    // borderBottomWidth: 2,
    // borderBottomRightRadius: 1,
    // borderColor: 'black',
    marginBottom: 10,
  },
});

  export default styles;