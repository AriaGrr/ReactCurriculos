import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

// Mudar pro botão passar pra um outro card separado com todas as informações do usuario disponiveis pra consulta
const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
    <Image 
      source={user.foto ? { uri: user.foto } : require('../assets/imagemIndisponivel.jpg')}
        style={styles.imagem}
    />
      <Text style={styles.cardTitle}>{user.nome}</Text>
      <Text style={styles.cardText}>Curso: {user.curso}</Text>
      <Button title="Ver Curriculo" onPress={() => navigation.navigate('Curriculo', { userId: item.id })} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagem:{ 
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardText: {
    fontSize: 14,
  },
});

export default UserCard;