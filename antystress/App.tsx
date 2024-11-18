import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Login from './_page/_LoginPage/Login';
import HomeScreen from './_page/HomePage';
import RejestracjaPage from './_page/_Rejestration/RejestrationPage';
import MainPage from './_page/MainPage';
import StressPage from './_page/_StressPage/StressPage';
import Videos from './_page/_VideosPage/VideosPage'; 
import Memes from './_page/_MemesPage/MemesPage';
import StressPage2 from './_page/_StressPage/StressPage2';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Rejestracja" component={RejestracjaPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="StressPage" component={StressPage} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name='Memes' component={Memes} />
        <Stack.Screen name='StressPage2' component={StressPage2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
