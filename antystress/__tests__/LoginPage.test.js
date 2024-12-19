import React from 'react';
import { render, fireEvent,waitFor  } from '@testing-library/react-native';
import Login from '../_page/_LoginPage/Login';
import axios from 'axios';
import { Alert } from 'react-native';

test('renders login component correctly', () => {
  const { getByPlaceholderText, getByText } = render(<Login />);
  
  expect(getByPlaceholderText('Login')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
  expect(getByText('Login')).toBeTruthy();
});
test('changes login state when user types', () => {
    const { getByPlaceholderText } = render(<Login />);
    const loginInput = getByPlaceholderText('Login');
    
    fireEvent.changeText(loginInput, 'testuser');
    
    expect(loginInput.props.value).toBe('testuser');
  });
  test('changes password state when user types', () => {
    const { getByPlaceholderText } = render(<Login />);
    const passwordInput = getByPlaceholderText('Password');
    
    fireEvent.changeText(passwordInput, 'password123');
    
    expect(passwordInput.props.value).toBe('password123');
  });
  jest.mock('axios');

test('calls handleLogin function when login button is pressed', async () => {
  const { getByText, getByPlaceholderText } = render(<Login />);
  const loginInput = getByPlaceholderText('Login');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');
  
  fireEvent.changeText(loginInput, 'testuser');
  fireEvent.changeText(passwordInput, 'password123');
  
  axios.post.mockResolvedValueOnce({ status: 200, data: 'fake_token' });

  fireEvent.press(loginButton);
  
  expect(axios.post).toHaveBeenCalledWith(
    'http://172.28.16.1:8080/testowy',
    { login: 'testuser', haslo: 'password123' },
    { headers: { 'Content-Type': 'application/json' } }
  );
});

jest.mock('axios');
jest.spyOn(Alert, 'alert').mockImplementation(() => {});

test('shows error alert when login fails', async () => {
  const { getByText, getByPlaceholderText } = render(<Login />);
  const loginInput = getByPlaceholderText('Login');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');
  
  fireEvent.changeText(loginInput, 'wronguser');
  fireEvent.changeText(passwordInput, 'wrongpassword');
  
  axios.post.mockRejectedValueOnce({
    response: { data: 'Invalid username or password' }
  });

  fireEvent.press(loginButton);

  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalledWith('Login Error', 'Invalid username or password');
  });
});