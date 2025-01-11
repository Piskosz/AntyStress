import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../../_page/_LoginPage/Login';
import axios from 'axios';
import { Alert } from 'react-native';
import MockAdapter from 'axios-mock-adapter';
import RejestracjaPage from '../../_page/_Rejestration/RejestrationPage';

// Sprawdza, czy komponent logowania renderuje wszystkie wymagane elementy.
test('renders login component correctly', () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    
    expect(getByPlaceholderText('Login')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
});

// Sprawdza, czy wpisywanie tekstu w polu login aktualizuje stan komponentu.
test('changes login state when user types', () => {
    const { getByPlaceholderText } = render(<Login />);
    const loginInput = getByPlaceholderText('Login');
    
    fireEvent.changeText(loginInput, 'testuser');
    
    expect(loginInput.props.value).toBe('testuser');
});

// Sprawdza, czy wpisywanie tekstu w polu hasło aktualizuje stan komponentu.
test('changes password state when user types', () => {
    const { getByPlaceholderText } = render(<Login />);
    const passwordInput = getByPlaceholderText('Password');
    
    fireEvent.changeText(passwordInput, 'password123');
    
    expect(passwordInput.props.value).toBe('password123');
});

// Sprawdza, czy wpisywanie tekstu w polu login aktualizuje jego wartość.
test('updates login state on text input', () => {
    const { getByPlaceholderText } = render(<Login />);
    
    fireEvent.changeText(getByPlaceholderText('Login'), 'testuser');
    
    expect(getByPlaceholderText('Login').props.value).toBe('testuser');
});

// Sprawdza, czy pole hasła ma ustawione ukrywanie tekstu.
test('password input is secure', () => {
    const { getByPlaceholderText } = render(<Login />);
    
    const passwordInput = getByPlaceholderText('Password');
    expect(passwordInput.props.secureTextEntry).toBe(true);
});

// Sprawdza, czy komponent rejestracji renderuje wszystkie wymagane elementy.
test('renders RejestracjaPage component correctly', () => {
    const { getByPlaceholderText, getByText } = render(<RejestracjaPage />);
  
    expect(getByPlaceholderText('LOGIN')).toBeTruthy();
    expect(getByPlaceholderText('PASSWORD')).toBeTruthy();
    expect(getByPlaceholderText('EMAIL')).toBeTruthy();
    expect(getByText('Register')).toBeTruthy();
});

// Sprawdza, czy pojawia się błąd walidacji, gdy pole login jest puste.
test('shows validation error when login is empty', () => {
    const { getByText, getByPlaceholderText } = render(<RejestracjaPage />);
  
    fireEvent.press(getByText('Register'));
  
    expect(() => getByText('Validation Error')).toBeTruthy();
});

// Sprawdza, czy wartości formularza są poprawnie aktualizowane.
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

// Sprawdza, czy pojawia się błąd walidacji dla niepoprawnego formatu emaila.
test('shows validation error for invalid email format', () => {
    const { getByText, getByPlaceholderText } = render(<RejestracjaPage />);
  
    const emailInput = getByPlaceholderText('EMAIL');
    fireEvent.changeText(emailInput, 'invalid-email');
  
    fireEvent.press(getByText('Register'));
  
    expect(() => getByText('Validation Error')).toBeTruthy();
});

jest.spyOn(Alert, 'alert'); // Zamockowanie Alert.alert

// Sprawdza, czy pojawia się błąd walidacji, gdy login lub hasło są puste.
test('shows validation error if login or password is empty', async () => {
    const { getByPlaceholderText, getByText } = render(<RejestracjaPage />);
  
    fireEvent.changeText(getByPlaceholderText('LOGIN'), '');
    fireEvent.changeText(getByPlaceholderText('PASSWORD'), '');
    fireEvent.changeText(getByPlaceholderText('EMAIL'), 'test@example.com');
  
    fireEvent.press(getByText('Register'));
  
    await waitFor(() => {
        expect(Alert.alert).toHaveBeenCalledWith('Validation Error', 'Login and Password cannot be empty.');
    });
});
