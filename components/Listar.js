import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import firebase from '../config/config';
import UserCard from './Card';
import styles from './Styles';

class Listar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
  }

  // Busca todos os usuários cadastrados no banco de dados
  componentDidMount() {
    firebase
      .database()
      .ref('usuarios')
      .on('value', (snapshot) => {
        let data = snapshot.val();
        let dados = Object.values(data);
        this.setState({ usuarios: dados });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.usuarios.length > 0 ? (
          <FlatList
            data={this.state.usuarios}
            renderItem={({ item }) => <UserCard user={item} />}
          />
        ) : null}
      </View>
    );
  }
}

export default Listar;