import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Login from './Login';
import { Alert } from 'react-native';



test('renders correctly', () => {
  const { getByPlaceholderText, getByText } = render(<Login />);
  
  expect(getByPlaceholderText('Login')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
  expect(getByText('Login')).toBeTruthy();
});

test('calls API and navigates on successful login', async () => {
    const mock = new MockAdapter(axios);
    const navigation = { navigate: jest.fn() };
    
    mock.onPost('http://172.28.16.1:8080/testowy').reply(200, { token: 'fake-jwt-token' });
  
    const { getByPlaceholderText, getByText } = render(<Login navigation={navigation} />);
    
    fireEvent.changeText(getByPlaceholderText('Login'), 'testuser');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    fireEvent.press(getByText('Login'));
  
    await waitFor(() => {
      expect(navigation.navigate).toHaveBeenCalledWith('MainPage');
    });
  
    mock.reset();
  });
  test('updates login state on text input', () => {
    const { getByPlaceholderText } = render(<Login />);
    
    fireEvent.changeText(getByPlaceholderText('Login'), 'testuser');
    
    expect(getByPlaceholderText('Login').props.value).toBe('testuser');
  });
  test('password input is secure', () => {
    const { getByPlaceholderText } = render(<Login />);
    
    const passwordInput = getByPlaceholderText('Password');
    expect(passwordInput.props.secureTextEntry).toBe(true);
  });
  jest.spyOn(Alert, 'alert'); // Użycie spyOn do monitorowania Alert.alert

test('shows error alert on failed login', async () => {
  const mock = new MockAdapter(axios);
  
  // Symulowanie odpowiedzi błędu z serwera
  mock.onPost('http://172.28.16.1:8080/testowy').reply(400, 'Invalid username or password');
  
  const { getByPlaceholderText, getByText } = render(<Login />);
  
  // Symulowanie wpisywania danych
  fireEvent.changeText(getByPlaceholderText('Login'), 'wronguser');
  fireEvent.changeText(getByPlaceholderText('Password'), 'wrongpassword');
  
  // Symulowanie kliknięcia przycisku logowania
  fireEvent.press(getByText('Login'));

  // Czekamy na wywołanie alertu
  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalledWith('Login Error', 'Invalid username or password');
  });

  // Resetowanie mocka po teście
  mock.reset();
});