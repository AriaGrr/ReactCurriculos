import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardRow}>
        <Image
          source={
            user.foto
              ? { uri: user.foto }
              : require('../assets/imagemIndisponivel.jpg')
          }
          style={styles.imagem}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.cardTitle}>{user.nome}</Text>
          <Text style={styles.cardText}>Interesse: {user.interesse}</Text>
          <Text style={styles.cardText}>E-mail: {user.email}</Text>
          <Text style={styles.cardText}>Curso: {user.curso}</Text>
          <Text style={styles.cardText}>Semestre: {user.semestre}</Text>
          <Text style={styles.cardText}>Sobre: {user.sobre}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  cardRow: {
    flexDirection: 'row', // Horizontalmente
    alignItems: 'center', // Verticalmente
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10, // Margem espaçamento
  },
  detailsContainer: {
    flex: 1, // Deixa espaço
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

