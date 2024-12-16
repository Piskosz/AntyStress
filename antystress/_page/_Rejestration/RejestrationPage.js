import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';
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

  const validateInputs = () => {
    const { login, haslo, mail } = formData;

    // Sprawdzenie, czy login i hasło są puste
    if (!login || !haslo) {
      Alert.alert('Validation Error', 'Login and Password cannot be empty.');
      return false;
    }

    // Sprawdzenie, czy login i hasło nie przekraczają 20 znaków
    if (login.length > 20 || haslo.length > 20) {
      Alert.alert('Validation Error', 'Login and Password cannot exceed 20 characters.');
      return false;
    }

    // Sprawdzenie, czy e-mail jest pusty
    if (!mail) {
      Alert.alert('Validation Error', 'Email cannot be empty.');
      return false;
    }

    // Sprawdzenie poprawności formatu e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) {
      return; // Stops execution if validation fails
    }

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
      if (error.response) {
        // Server-side error (500, 400, etc.)
        Alert.alert('Registration error', error.response?.data || 'Server error');
      } else {
        // Network or unexpected error
        Alert.alert('Registration error', 'An unexpected error occurred.');
      }
      console.error('Registration error:', error);
      console.error('Error details:', error.response?.data);
    }
  };

  const renderSuccessMessage = () => {
    if (registrationSuccess) {
      return <Text style={styles.successMessage}>User successfully registered!</Text>;
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
          placeholder="PASSWORD"
          onChangeText={(text) => handleInputChange('haslo', text)}
          value={formData.haslo}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          onChangeText={(text) => handleInputChange('mail', text)}
          value={formData.mail}
        />
      </View>
      {/* Register button */}
      <Button title="Register" onPress={handleSubmit} />
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
