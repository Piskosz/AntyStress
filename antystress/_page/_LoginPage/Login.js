import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://172.28.16.1:8080/testowy',
        { login, haslo: password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.status === 200) {
        const token = response.data;
        console.log('JWT Token:', token);
        navigation.navigate('MainPage');
      } else {
        Alert.alert('Login Error', 'Invalid username or password');
      }
    } catch (error) {
      console.error('Login Error:', error);
      if (error.response) {
        console.error('Error details:', error.response.data);
        Alert.alert('Login Error', error.response.data);
      } else if (error.request) {
        console.error('No response from the server:', error.request);
        Alert.alert('Error', 'No response from the server. Please try again later.');
      } else {
        console.error('Error during request setup:', error.message);
        Alert.alert('Error', 'An error occurred during login. Please try again later.');
      }
    }
  };

  return (
    <View style={styles.container}>
     
      <Image
        source={require('./mozg.jpg')}
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Login"
        onChangeText={text => setLogin(text)}
        value={login}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009cf6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
    marginTop: '40%',
    opacity: 0.9,
  },
  image: {
    width: '40%',
    height: '50%',
    marginBottom: 20,
  },
  input: {
    width: '60%',
    height: 60,
    backgroundColor: '#00ccfa',
    borderRadius: 40,
    padding: 0,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
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
});

export default Login;
