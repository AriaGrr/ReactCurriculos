import * as React from 'react';
import {
  TextInput,
  View,
  Button,
  FlatList,
} from 'react-native';
import firebase from '../config/config';
import styles from './Styles';
import UserCard from './Card';

class Buscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      searchText: '',
    };
  }

  // Busca todos os usuários cadastrados no banco de dados
  componentDidMount() {
    firebase
      .database()
      .ref('usuarios')
      .once('value', (snapshot) => {
        this.setState({ usuarios: Object.values(snapshot.val()) });
      });
  }

  // Busca os usuários que contém o texto digitado no nome
  handleSearch = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    const { usuarios, searchText } = this.state;

    // Filtra os usuários que contém o texto digitado no nome
    const filtrados = usuarios.filter((user) =>
      user.nome.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <View style={styles.container}>
        <TextInput  style={styles.input}
            placeholder="Buscar por nome..."
            onChangeText={this.handleSearch}
            value={searchText}
            />
        
        <View style={styles.container}>
        <FlatList
          data={filtrados}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={(item) => item.id}
        />
        </View>
      </View>
    );
  }
}

export default Buscar;

