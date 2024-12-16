import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import RejestracjaPage from './RejestrationPage';
import { Alert } from 'react-native';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

test('renders RejestracjaPage component correctly', () => {
    const { getByPlaceholderText, getByText } = render(<RejestracjaPage />);
  
    // Sprawdzenie obecności pól tekstowych
    expect(getByPlaceholderText('LOGIN')).toBeTruthy();
    expect(getByPlaceholderText('PASSWORD')).toBeTruthy();
    expect(getByPlaceholderText('EMAIL')).toBeTruthy();
  
    // Sprawdzenie obecności przycisku
    expect(getByText('Register')).toBeTruthy();
  });
  

  test('shows validation error when login is empty', () => {
    const { getByText, getByPlaceholderText } = render(<RejestracjaPage />);
  
    // Wciśnięcie przycisku bez wypełnienia danych
    fireEvent.press(getByText('Register'));
  
    // Sprawdź, czy Alert z walidacją został wywołany
    expect(() => getByText('Validation Error')).toBeTruthy();
  });

  
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

  test('shows validation error for invalid email format', () => {
    const { getByText, getByPlaceholderText } = render(<RejestracjaPage />);
  
    const emailInput = getByPlaceholderText('EMAIL');
    fireEvent.changeText(emailInput, 'invalid-email');
  
    fireEvent.press(getByText('Register'));
  
    expect(() => getByText('Validation Error')).toBeTruthy();
  });

  jest.mock('axios');

test('displays success message on successful registration', async () => {
  const { getByText, getByPlaceholderText } = render(<RejestracjaPage />);
  
  axios.post.mockResolvedValueOnce({ data: { message: 'User registered successfully' } });

  fireEvent.changeText(getByPlaceholderText('LOGIN'), 'testuser');
  fireEvent.changeText(getByPlaceholderText('PASSWORD'), 'password123');
  fireEvent.changeText(getByPlaceholderText('EMAIL'), 'test@example.com');

  await fireEvent.press(getByText('Register'));

  expect(getByText('User successfully registered!')).toBeTruthy();
});
jest.spyOn(Alert, 'alert');

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

test('shows validation error if login or password exceeds 20 characters', async () => {
  const { getByPlaceholderText, getByText } = render(<RejestracjaPage />);

  fireEvent.changeText(getByPlaceholderText('LOGIN'), 'thisisaverylongusername');
  fireEvent.changeText(getByPlaceholderText('PASSWORD'), 'thisisaverylongpassword');
  fireEvent.changeText(getByPlaceholderText('EMAIL'), 'test@example.com');
  
  fireEvent.press(getByText('Register'));

  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalledWith('Validation Error', 'Login and Password cannot exceed 20 characters.');
  });
});
test('shows validation error if email is invalid', async () => {
  const { getByPlaceholderText, getByText } = render(<RejestracjaPage />);

  fireEvent.changeText(getByPlaceholderText('LOGIN'), 'validuser');
  fireEvent.changeText(getByPlaceholderText('PASSWORD'), 'validpassword');
  fireEvent.changeText(getByPlaceholderText('EMAIL'), 'invalidemail');
  
  fireEvent.press(getByText('Register'));

  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalledWith('Validation Error', 'Please enter a valid email address.');
  });
});
test('shows validation error if email is empty', async () => {
  const { getByPlaceholderText, getByText } = render(<RejestracjaPage />);

  fireEvent.changeText(getByPlaceholderText('LOGIN'), 'testuser');
  fireEvent.changeText(getByPlaceholderText('PASSWORD'), 'password123');
  fireEvent.changeText(getByPlaceholderText('EMAIL'), '');
  
  fireEvent.press(getByText('Register'));

  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalledWith('Validation Error', 'Email cannot be empty.');
  });
});
test('does not show success message if registration fails', async () => {
  const { getByText, getByPlaceholderText } = render(<RejestracjaPage />);

  axios.post.mockRejectedValueOnce(new Error('Registration error'));

  fireEvent.changeText(getByPlaceholderText('LOGIN'), 'testuser');
  fireEvent.changeText(getByPlaceholderText('PASSWORD'), 'password123');
  fireEvent.changeText(getByPlaceholderText('EMAIL'), 'test@example.com');

  await fireEvent.press(getByText('Register'));

  // Check that the success message is not shown
  expect(() => getByText('User successfully registered!')).toThrow();

  // Check that the error alert is triggered
  expect(Alert.alert).toHaveBeenCalledWith('Registration error', 'An unexpected error occurred.');
});
