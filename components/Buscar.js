import * as React from 'react';
import {
  TextInput,
  Text,
  View,
  Button,
  StyleSheet,
  TouchableHighlight,
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

  componentDidMount() {
    firebase
      .database()
      .ref('usuarios')
      .once('value', (snapshot) => {
        this.setState({ usuarios: Object.values(snapshot.val()) });
      });
  }
  handleSearch = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    const { usuarios, searchText } = this.state;

    const filteredUsers = usuarios.filter((user) =>
      user.nome.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <View style={styles.container}>
        <TextInput  style={styles.input}
            placeholder="Buscar por nome..."
            onChangeText={this.handleSearch}
            value={searchText}
            />
        <Button title="Buscar" onPress={() => this.buscar()} />
        <View style={styles.container}>
        <FlatList
          data={filteredUsers}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={(item) => item.id}
        />
        </View>
      </View>
    );
  }
}

export default Buscar;

