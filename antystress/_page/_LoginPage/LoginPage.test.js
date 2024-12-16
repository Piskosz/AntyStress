import React from 'react';
import { render, fireEvent,waitFor  } from '@testing-library/react-native';
import Login from './Login';
import axios from 'axios'; // Dodanie importu axios
import { Alert } from 'react-native';


test('renders login component correctly', () => {
  const { getByPlaceholderText, getByText } = render(<Login />);
  
  // Sprawdzenie obecności pól do wpisania loginu i hasła
  expect(getByPlaceholderText('Login')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
  
  // Sprawdzenie obecności przycisku logowania
  expect(getByText('Login')).toBeTruthy();
});
test('changes login state when user types', () => {
    const { getByPlaceholderText } = render(<Login />);
    const loginInput = getByPlaceholderText('Login');
    
    // Symulowanie wprowadzenia tekstu
    fireEvent.changeText(loginInput, 'testuser');
    
    // Sprawdzenie, czy stan loginu został zaktualizowany
    expect(loginInput.props.value).toBe('testuser');
  });
  test('changes password state when user types', () => {
    const { getByPlaceholderText } = render(<Login />);
    const passwordInput = getByPlaceholderText('Password');
    
    // Symulowanie wprowadzenia tekstu
    fireEvent.changeText(passwordInput, 'password123');
    
    // Sprawdzenie, czy stan hasła został zaktualizowany
    expect(passwordInput.props.value).toBe('password123');
  });
  jest.mock('axios');

test('calls handleLogin function when login button is pressed', async () => {
  const { getByText, getByPlaceholderText } = render(<Login />);
  const loginInput = getByPlaceholderText('Login');
  const passwordInput = getByPlaceholderText('Password');
  const loginButton = getByText('Login');
  
  // Symulowanie wprowadzenia danych
  fireEvent.changeText(loginInput, 'testuser');
  fireEvent.changeText(passwordInput, 'password123');
  
  // Mockowanie odpowiedzi z serwera
  axios.post.mockResolvedValueOnce({ status: 200, data: 'fake_token' });

  // Symulowanie kliknięcia przycisku logowania
  fireEvent.press(loginButton);
  
  // Sprawdzenie, czy axios został wywołany z odpowiednimi danymi
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
  
  // Symulowanie wprowadzenia danych
  fireEvent.changeText(loginInput, 'wronguser');
  fireEvent.changeText(passwordInput, 'wrongpassword');
  
  // Mockowanie błędu odpowiedzi z serwera
  axios.post.mockRejectedValueOnce({
    response: { data: 'Invalid username or password' }
  });

  // Symulowanie kliknięcia przycisku logowania
  fireEvent.press(loginButton);

  // Czekamy na pokazanie komunikatu o błędzie
  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalledWith('Login Error', 'Invalid username or password');
  });
});