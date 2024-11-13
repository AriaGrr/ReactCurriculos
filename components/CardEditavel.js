import React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TextInput,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../config/config';
import * as Haptics from 'expo-haptics';

const CardEdit = ({ user, navigation }) => {
  const [selectedField, setSelectedField] = useState('');
  const [newValue, setNewValue] = useState('');
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  // Campos
  const [fields, setFields] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFields = async () => {
      try {
        // Lógica para buscar os campos, se necessário
        const fetchedFields = [
          'nome',
          'interesse',
          'curso',
          'semestre',
          'sobre',
          'email',
          'senha',
        ];
        setFields(fetchedFields);
        setIsLoading(false);
      } catch (error) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); //faz vibrar
        console.error('Erro ao buscar campos:', error);
      }
    };

    fetchFields();
  }, []);

  // Seleção de campo
  const handleFieldChange = (itemValue) => {
    setSelectedField(itemValue);
  };

  // Mudança de valor
  const handleValueChange = (text) => {
    setNewValue(text);
  };

  const handleLogout = async () => {
    try {
      // Limpa AsyncStorage
      await AsyncStorage.removeItem('username');
      await AsyncStorage.removeItem('user');

      setIsLogoutModalVisible(false);
      navigation.navigate('Principal');
    } catch (error) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); //faz vibrar
      console.error('Erro ao deslogar:', error);
    }
  };

  // Achar o ID único
  const findUserIdByUsername = async (username) => {
    try {
      const usersRef = firebase.database().ref('usuarios');
      const snapshot = await usersRef
        .orderByChild('username')
        .equalTo(username)
        .once('value');

      if (snapshot.exists()) {
        const user = snapshot.val();
        const userId = Object.keys(user)[0]; // A estrutura é um objeto com chaves como IDs
        return userId;
      } else {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); //faz vibrar
        console.log('Usuário não encontrado');
        return null;
      }
    } catch (error) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); //faz vibrar
      console.error('Erro ao buscar usuário:', error);
      return null;
    }
  };

  // O async (função assíncrona) serve para não bloquear a execução restante do código enquanto estiver nesta parte. O await dentro dessa função serve para parar a execução dela até a promessa ser retornada.
  const handleSave = async () => {
    try {
      // Obter o username do usuário do AsyncStorage
      const username = await AsyncStorage.getItem('username');
      const userId = await findUserIdByUsername(username);
      const userRef = firebase.database().ref(`usuarios/${userId}`);

      // Atualizar o campo selecionado
      await userRef.update({
        [selectedField]: newValue,
      });

      // Atualiza o user com o novo valor no campo desejado
      const updatedUser = {
        ...user,
        [selectedField]: newValue,
      };

      // Atualiza Firebase e AsyncStorage com updatedUser
      await userRef.update(updatedUser);
      await AsyncStorage.setItem('user', JSON.stringify(updatedUser));
      alert('Dados atualizados com sucesso!');
    } catch (error) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); //faz vibrar
      console.error('Erro ao atualizar dados:', error);
      alert('Ocorreu um erro ao salvar as alterações. Tente novamente.');
    }
  };

  const indisponivel = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); //faz vibrar
    alert('Funcionalidade fora do ar! Tente novamente mais tarde.');
  };

  return (
    <View style={styles.card}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isLogoutModalVisible}
        onRequestClose={() => setIsLogoutModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.cardText}>
            Tem certeza que deseja sair?
          </Text>
          <View>
            <Button
              title="Cancelar"
              onPress={() => setIsLogoutModalVisible(false)}
            />
            <Button title="Sair" onPress={handleLogout} color="red"/>
          </View>
        </View>
      </Modal>
      <Image
        source={
          user.foto
            ? { uri: user.foto }
            : require('../assets/imagemIndisponivel.jpg')
        }
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.cardTitle}>{user.nome}</Text>
        <Text style={styles.cardText}>Interesse: {user.interesse}</Text>
        <Text style={styles.cardText}>Curso: {user.curso}</Text>
        <Text style={styles.cardText}>Semestre: {user.semestre}</Text>
        <Text style={styles.cardText}>Sobre: {user.sobre}</Text>
        <Text style={styles.cardText}>E-mail: {user.email}</Text>
        <Text style={styles.cardText}>Username: {user.username}</Text>
        <Text style={styles.cardText}>Senha: oculto</Text>
      </View>
      <View style={styles.editSection}>
        <Button
          title="Trocar foto"
          onPress={indisponivel}
          style={styles.button}
        />
        <View style={styles.editSection}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Picker
              selectedValue={selectedField}
              onValueChange={handleFieldChange}
              style={styles.picker}>
              {fields.map((field) => (
                <Picker.Item label={field} value={field} key={field} />
              ))}
            </Picker>
          )}
          <TextInput
            style={styles.textInput}
            value={newValue}
            onChangeText={handleValueChange}
            placeholder="Novo valor"
          />
        </View>
        <Button
          title="Editar campo"
          onPress={handleSave}
          style={styles.button}
        />
        <Button
          title="Logout"
          onPress={() => setIsLogoutModalVisible(true)}
          color="red"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center', // Centraliza horizontalmente
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Centraliza o titulo
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center', // Centraliza o texto
  },
  editSection: {
    marginTop: 20, // Margem superior
  },
  picker: {
    width: 200,
    marginBottom: 10, // Margem inferior para criar espaço entre os elementos
  },
  textInput: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10, // Margem inferior para criar espaço entre os elementos
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  modalContainer: {
    justifyContent: 'flex-end', 
    margin: 0, 
  },
});

export default CardEdit;
