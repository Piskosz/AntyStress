import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const RejestracjaPage = () => {
  const [formData, setFormData] = useState({
    login: '',
    haslo: '',
    mail: ''
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://172.28.16.1:8080/Rejestracja/dodawanie/',
        [formData],
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response.data.message);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Błąd podczas rejestracji:', error);
      console.error('Szczegóły błędu:', error.response.data);
    }
  };

  const renderSuccessMessage = () => {
    if (registrationSuccess) {
      return <Text style={styles.successMessage}>Poprawnie zarejestrowano użytkownika!</Text>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./mozg.jpg')}
        style={styles.image}
      />
      {renderSuccessMessage()}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="LOGIN"
          onChangeText={(text) => handleInputChange('login', text)}
          value={formData.login}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="HASŁO"
          onChangeText={(text) => handleInputChange('haslo', text)}
          value={formData.haslo}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="MAIL"
          onChangeText={(text) => handleInputChange('mail', text)}
          value={formData.mail}
        />
      </View>
      <Button title="Zarejestruj się" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 156, 246)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
    marginTop: '50%',
    opacity: 0.9,
  },
  image: {
    width: '40%',
    height: '50%',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#00cefc',
    borderRadius: 40,
    padding: 0,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    opacity: 0.7,
  },
  button: {
    backgroundColor: '#00cefc',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 40,
    marginVertical: 10,
    cursor: 'pointer',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#ea6f6f',
  },
  successMessage: {
    color: 'green',
    marginTop: 10,
  },
});

export default RejestracjaPage;
