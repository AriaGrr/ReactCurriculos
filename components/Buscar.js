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
        <FlatList
          data={filteredUsers}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchText: '',
//       usuarios: [],
//       filtrados: [],
//     };
//   }

//   componentDidMount() {
//     firebase
//       .database()
//       .ref('usuarios')
//       .once('value', (snapshot) => {
//         this.setState({ usuarios: Object.values(snapshot.val()) });
//       });
//   }

//   buscar() {
//     const searchText = this.state.searchText.toLowerCase();

//     const filtrados = this.state.usuarios.filter((usuario) => {
//       const nomeLower = usuario.nome.toLowerCase();
//       return nomeLower.includes(searchText); // Case-insensitive search
//     });

//     this.setState({ filtrados });
//   }

//   render() {
//     const { searchText, filtrados } = this.state;

//     return (
//       <View>
//         <TextInput
//           style={styles.input}
//           placeholder="Buscar por nome..."
//           onChangeText={(texto) => this.setState({ searchText: texto })}
//           value={searchText} // Set initial value for controlled input
//         />
//         <TouchableHighlight style={styles.botao} onPress={() => this.buscar()}>
//           <Text style={styles.txtBotao}>Buscar</Text>
//         </TouchableHighlight>

//         {filtrados.length > 0 ? (
//           <FlatList
//             data={filtrados}
//             renderItem={({ item }) => (
//               <Text style={styles.listItem}>
//                 {item.nome} - Curso: {item.curso}
//               </Text>
//             )}
//             keyExtractor={(item) => item.nome} // Use a unique key for each item
//           />
//         ) : (
//           searchText.length > 0 ? (
//             <Text style={styles.noResults}>Nenhum resultado encontrado.</Text>
//           ) : null
//         )}
//       </View>
//     );
//   }
// }

export default Buscar;

// const estilos = StyleSheet.create({
//   // ... your existing styles ...
//   listItem: {
//     fontSize: 20,
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//   },
//   noResults: {
//     fontSize: 18,
//     padding: 10,
//     color: 'gray',
//     fontStyle: 'italic',
//   },
// });
// class Buscar extends React.Component {
//     constructor(props){
//     super(props);
//     this.state = {
//       usuarios: []
//     }
//   }

//   buscar(){
//     firebase.database().ref("usuarios").orderByChild("nome").equalTo(this.nome).once('value', snapshot =>{
//       let data  = snapshot.val();
//       if(data == null){
//         alert("Não encontrado!")
//       }
//       else{
//         let dados = Object.values(data)
//         this.setState({usuarios: dados})
//       }
//     })
//   }

//   render(){
//     return(
//       <View>
//         <TextInput style={estilos.input}
//           placeholder="Campo"
//           onChangeText={(texto)=>{this.nome = texto}}
//         />
//         <TouchableHighlight style={estilos.botao} onPress={()=>this.buscar()}>
//           <Text style={estilos.txtBotao} >{"Buscar"}</Text>
//         </TouchableHighlight>
//         {this.state.usuarios.length > 0 ?
//           this.state.usuarios.map( objeto => (
//             <Text>{objeto.nome} {objeto.curso}</Text>)) :
//             null}
//       </View>
//     )

//   }
// }

// const estilos = StyleSheet.create({
//   txtBotao: {
//     color: "black",
//     fontSize: 25,
//     alignSelf: "center"
//   },
//   botao: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: 'gray',
//     backgroundColor: "cyan",
//     margin: 10,
//     borderRadius: 8,
//     padding: 5,
//   },
//   input: {
//     height: 50,
//     padding: 5,
//     fontSize: 25,
//     borderColor: 'gray',
//     borderWidth: 1,
//     margin: 10,
//     borderRadius: 8
//   }
// });
