import * as React from 'react';
import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
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
    marginTop: 10,
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
  selected: {
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
});

  export default styles;