import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MainPage = ({ navigation }) => {
  const goToStressPage = () => {
    navigation.navigate('StressPage');
  };
  const goToVideos = () => {
    navigation.navigate('Videos');
  };
  const goToMemes = () => {
    navigation.navigate('Memes');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./mozg.jpg')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={goToMemes}>
        <Text style={styles.buttonText}>Memy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToVideos}>
        <Text style={styles.buttonText}>Filmy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToStressPage}>
        <Text style={styles.buttonText}>Zmierz stres</Text>
      </TouchableOpacity>
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
  image: {
    width: '40%', 
    height: '50%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00cefc',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 40,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainPage;
