import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const MainPage = ({ navigation }) => {
  // Navigate to the StressPage
  const goToStressPage = () => {
    navigation.navigate('StressPage');
  };

  // Navigate to the Videos page
  const goToVideos = () => {
    navigation.navigate('Videos');
  };

  // Navigate to the Memes page
  const goToMemes = () => {
    navigation.navigate('Memes');
  };

  return (
    <View style={styles.container}>
      {/* Display the image */}
      <Image
        source={require('./mozg.jpg')}
        style={styles.image}
      />
      {/* Memes button */}
      <TouchableOpacity style={styles.button} onPress={goToMemes}>
        <Text style={styles.buttonText}>Memes</Text>
      </TouchableOpacity>
      {/* Videos button */}
      <TouchableOpacity style={styles.button} onPress={goToVideos}>
        <Text style={styles.buttonText}>Videos</Text>
      </TouchableOpacity>
      {/* Stress test button */}
      <TouchableOpacity style={styles.button} onPress={goToStressPage}>
        <Text style={styles.buttonText}>Measure Stress</Text>
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
