import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Memes = ({ navigation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    require('./image(1).jpg'),
    require('./image(2).jpg'), 
    require('./image(3).jpg'),
    require('./image(4).jpg'), 
    require('./image(5).jpg'),
    require('./image(6).jpg'), 
    require('./image(7).jpg'),
    require('./image(8).jpg'), 
    require('./image(9).jpg'),
    require('./image(10).jpg'), 
    require('./image(11).jpg'),
    require('./image(12).jpg'), 
    require('./image(13).jpg'),
    require('./image(14).jpg'), 
    require('./image(15).jpg'),
    require('./image(16).jpg'), 
    require('./image(17).jpg'), 
    require('./image(18).jpg'),
    require('./image(19).jpg'), 
    require('./image(20).jpg'),
    require('./image(21).jpg'), 
    require('./image(22).jpg'),
    require('./image(23).jpg'), 
    require('./image(24).jpg'),
    require('./image(25).jpg'), 
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={images[currentImageIndex]} 
        style={styles.image} 
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={nextImage}>
        <Text style={styles.buttonText}>Next</Text>
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
  heading: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
    marginTop: '70%',
    opacity: 0.9,
  },
  image: {
    width: 300,
    height: 300,
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

export default Memes;
