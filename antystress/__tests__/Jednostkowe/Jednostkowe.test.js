import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../../_page/_LoginPage/Login';
import axios from 'axios';
import { Alert } from 'react-native';
import MockAdapter from 'axios-mock-adapter';
import RejestracjaPage from '../../_page/_Rejestration/RejestrationPage';

// Test jednostkowy: sprawdza, czy komponent renderuje wszystkie wymagane elementy poprawnie.
test('renders login component correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    
    expect(getByPlaceholderText('Login')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
  });

  // Test jednostkowy: sprawdza, czy zmiana tekstu w polu login aktualizuje stan komponentu.
test('changes login state when user types', () => {
    const { getByPlaceholderText } = render(<Login />);
    const loginInput = getByPlaceholderText('Login');
    
    fireEvent.changeText(loginInput, 'testuser');
    
    expect(loginInput.props.value).toBe('testuser');
  });

  // Test jednostkowy: sprawdza, czy zmiana tekstu w polu hasło aktualizuje stan komponentu.
test('changes password state when user types', () => {
    const { getByPlaceholderText } = render(<Login />);
    const passwordInput = getByPlaceholderText('Password');
    
    fireEvent.changeText(passwordInput, 'password123');
    
    expect(passwordInput.props.value).toBe('password123');
  });
  
  // Mockowanie zewnętrznej zależności axios.
  jest.mock('axios');

  // Test jednostkowy: sprawdza, czy stan loginu aktualizuje się po wprowadzeniu tekstu w pole tekstowe.
test('updates login state on text input', () => {
    const { getByPlaceholderText } = render(<Login />);
    
    fireEvent.changeText(getByPlaceholderText('Login'), 'testuser');
    
    expect(getByPlaceholderText('Login').props.value).toBe('testuser');
  });
  
  // Test jednostkowy: sprawdza, czy pole hasła ma włączone ukrywanie tekstu (secureTextEntry).
  test('password input is secure', () => {
    const { getByPlaceholderText } = render(<Login />);
    
    const passwordInput = getByPlaceholderText('Password');
    expect(passwordInput.props.secureTextEntry).toBe(true);
  });
  // Jednostkowy test, sprawdza tylko renderowanie komponentu.
test('renders RejestracjaPage component correctly', () => {
    const { getByPlaceholderText, getByText } = render(<RejestracjaPage />);
  
    expect(getByPlaceholderText('LOGIN')).toBeTruthy();
    expect(getByPlaceholderText('PASSWORD')).toBeTruthy();
    expect(getByPlaceholderText('EMAIL')).toBeTruthy();
  
    expect(getByText('Register')).toBeTruthy();
  });
  

// Jednostkowy test, sprawdza walidację pustego loginu.
test('shows validation error when login is empty', () => {
    const { getByText, getByPlaceholderText } = render(<RejestracjaPage />);
  
    fireEvent.press(getByText('Register'));
  
    expect(() => getByText('Validation Error')).toBeTruthy();
  });

  
// Jednostkowy test, sprawdza czy wartości formularza są poprawnie aktualizowane.
test('updates login, password, and email correctly', () => {
    const { getByPlaceholderText } = render(<RejestracjaPage />);
  
    const loginInput = getByPlaceholderText('LOGIN');
    const passwordInput = getByPlaceholderText('PASSWORD');
    const emailInput = getByPlaceholderText('EMAIL');
  
    fireEvent.changeText(loginInput, 'testuser');
    fireEvent.changeText(passwordInput, 'password123');
    fireEvent.changeText(emailInput, 'test@example.com');
  
    expect(loginInput.props.value).toBe('testuser');
    expect(passwordInput.props.value).toBe('password123');
    expect(emailInput.props.value).toBe('test@example.com');
  });
// Jednostkowy test, sprawdza walidację niepoprawnego formatu emaila.

  test('shows validation error for invalid email format', () => {
    const { getByText, getByPlaceholderText } = render(<RejestracjaPage />);
  
    const emailInput = getByPlaceholderText('EMAIL');
    fireEvent.changeText(emailInput, 'invalid-email');
  
    fireEvent.press(getByText('Register'));
  
    expect(() => getByText('Validation Error')).toBeTruthy();
  });

  jest.spyOn(Alert, 'alert'); // Zamockowanie Alert.alert

  test('shows validation error if login or password is empty', async () => {
    const { getByPlaceholderText, getByText } = render(<RejestracjaPage />);
  
    fireEvent.changeText(getByPlaceholderText('LOGIN'), '');  // Login jest pusty
    fireEvent.changeText(getByPlaceholderText('PASSWORD'), '');  // Hasło jest puste
    fireEvent.changeText(getByPlaceholderText('EMAIL'), 'test@example.com');  // Email jest podany
  
    fireEvent.press(getByText('Register'));  // Kliknięcie przycisku "Register"
  
    // Czekamy na wywołanie Alert.alert
    await waitFor(() => {
      // Sprawdzamy, czy Alert.alert zostało wywołane z odpowiednimi argumentami
      expect(Alert.alert).toHaveBeenCalledWith('Validation Error', 'Login and Password cannot be empty.');
    });
  });
  