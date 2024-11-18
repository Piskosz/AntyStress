import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';

const StressPage2 = ({ navigation }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isImage, setIsImage] = useState(true);
  const [mediaCount, setMediaCount] = useState(0);

  const media = [
    { type: 'image', source: require('./image(1).jpg') },
    { type: 'image', source: require('./image(2).jpg') },
    { type: 'image', source: require('./image(3).jpg') },
    { type: 'image', source: require('./image(4).jpg') },
    { type: 'image', source: require('./image(5).jpg') },
    { type: 'image', source: require('./image(6).jpg') },
    { type: 'image', source: require('./image(7).jpg') },
    { type: 'image', source: require('./image(8).jpg') },
    { type: 'image', source: require('./image(9).jpg') },
    { type: 'image', source: require('./image(10).jpg') },
    { type: 'video', source: require('./film1.mp4') },
    { type: 'video', source: require('./film2.mp4') },
    { type: 'video', source: require('./film3.mp4') },
    { type: 'video', source: require('./film4.mp4') },
    { type: 'video', source: require('./film5.mp4') },
    { type: 'video', source: require('./film6.mp4') },
    { type: 'video', source: require('./film7.mp4') },
    { type: 'video', source: require('./film8.mp4') },
    { type: 'video', source: require('./film9.mp4') }
  ];

  useEffect(() => {
    if (mediaCount >= 5) {
      navigation.navigate('StressPage');
    }
  }, [mediaCount]);

  const nextMedia = () => {
    let nextIndex = Math.floor(Math.random() * media.length);
    setCurrentMediaIndex(nextIndex);
    setIsImage(media[nextIndex].type === 'image');
    setMediaCount(mediaCount + 1);
  };

  return (
    <View style={styles.container}>
      {isImage ? (
        <Image source={media[currentMediaIndex].source} style={styles.media} resizeMode="contain" />
      ) : (
        <Video source={media[currentMediaIndex].source} style={styles.media} resizeMode="contain" />
      )}

      <TouchableOpacity style={styles.button} onPress={nextMedia}>
        <Text style={styles.buttonText}>Następny</Text>
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
  media: {
    width: '90%',
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

export default StressPage2;
