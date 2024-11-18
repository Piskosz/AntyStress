import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const Videos = ({ navigation }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = [
    require('./film1.mp4'),
    require('./film2.mp4'),
    require('./film3.mp4'),
    require('./film4.mp4'),
    require('./film5.mp4'),
    require('./film6.mp4'),
    require('./film7.mp4'),
    require('./film8.mp4'),
    require('./film9.mp4'),
    require('./film10.mp4'),
    require('./film11.mp4'),
    require('./film12.mp4'),
    require('./film13.mp4'),
    require('./film14.mp4'),
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <View style={styles.container}>
      <Video 
        source={videos[currentVideoIndex]} 
        style={styles.video} 
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.button} onPress={nextVideo}>
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
  heading: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
    marginTop: '70%',
    opacity: 0.9,
  },
  video: {
    width: '100%',
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

export default Videos;
