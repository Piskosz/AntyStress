import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const StressPage = ({ navigation }) => {
  const [stressLevel, setStressLevel] = useState(0);

  const handleButtonPress = (value) => {
    console.log('Naciśnięto przycisk z wartością:', value);
    setStressLevel(value);
    if (value <= 3) {
      Alert.alert('Weź się do roboty');
    } else {
      navigation.navigate('StressPage2');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wskaźnik stresu: {stressLevel}</Text>
      {[...Array(10)].map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            index === 0 && styles.first,
            index === 9 && styles.last,
            stressLevel === 10 - index && styles.clicked,
          ]}
          onPress={() => handleButtonPress(10 - index)}>
          <Text style={styles.buttonText}>{10 - index}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgb(0, 156, 246)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 25,
    marginBottom: 20,
    color: 'white',
    marginTop: 20,
    opacity: 0.9,
  },
  button: {
    backgroundColor: '#00cefc',
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: 80,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  first: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  last: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  clicked: {
    backgroundColor: 'red',
  },
});

export default StressPage;
