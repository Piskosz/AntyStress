import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToRejestracja = () => {
    navigation.navigate('Rejestracja');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./mozg.jpg')}
        style={styles.image}
      />
      <Text style={styles.heading}>Home Page</Text>
      <TouchableOpacity style={styles.button} onPress={goToRejestracja}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
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
  image: {
    width: '50%', 
    height: '60%',
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
    color: 'white',
    opacity: 0.9,
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

export default HomeScreen;
