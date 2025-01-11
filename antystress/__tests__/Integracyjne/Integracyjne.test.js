import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../../_page/_LoginPage/Login';
import axios from 'axios';
import { Alert } from 'react-native';
import MockAdapter from 'axios-mock-adapter';
import RejestracjaPage from '../../_page/_Rejestration/RejestrationPage';

// Test integracyjny: sprawdza, czy po naciśnięciu przycisku login wysyłane jest żądanie do API z odpowiednimi parametrami.
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
  
  // Mockowanie zewnętrznych zależności: axios oraz Alert.
  jest.mock('axios');
  jest.spyOn(Alert, 'alert').mockImplementation(() => {});
  
  // Test integracyjny: sprawdza, czy w przypadku nieudanego logowania wyświetlany jest odpowiedni komunikat błędu.
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
  
  test('navigates to main page on successful login', async () => {
    const mockNavigate = jest.fn();
    const { getByText, getByPlaceholderText } = render(<Login navigation={{ navigate: mockNavigate }} />);
    
    fireEvent.changeText(getByPlaceholderText('Login'), 'testuser');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password123');
    
    axios.post.mockResolvedValueOnce({ status: 200, data: 'fake_token' });
  
    fireEvent.press(getByText('Login'));
  
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('MainPage');
    });
  });
  
  test('does not navigate on failed login attempt', async () => {
    const mockNavigate = jest.fn();
    const { getByText, getByPlaceholderText } = render(<Login navigation={{ navigate: mockNavigate }} />);
    
    fireEvent.changeText(getByPlaceholderText('Login'), 'wronguser');
    fireEvent.changeText(getByPlaceholderText('Password'), 'wrongpassword');
    
    axios.post.mockRejectedValueOnce({
      response: { data: 'Invalid username or password' }
    });
  
    fireEvent.press(getByText('Login'));
  
    await waitFor(() => {
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });

// Test integracyjny: sprawdza, czy po nieudanym logowaniu wyświetlany jest alert z odpowiednią wiadomością.
jest.spyOn(Alert, 'alert');
test('shows error alert on failed login', async () => {
  const mock = new MockAdapter(axios);
  
  mock.onPost('http://172.28.16.1:8080/testowy').reply(400, 'Invalid username or password');
  
  const { getByPlaceholderText, getByText } = render(<Login />);
  
  fireEvent.changeText(getByPlaceholderText('Login'), 'wronguser');
  fireEvent.changeText(getByPlaceholderText('Password'), 'wrongpassword');
  
  fireEvent.press(getByText('Login'));

  await waitFor(() => {
    expect(Alert.alert).toHaveBeenCalledWith('Login Error', 'Invalid username or password');
  });

  mock.reset();
});
// Integracyjny test, sprawdza czy po udanej rejestracji wyświetla się komunikat o sukcesie.
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
  
// Integracyjny test, sprawdza czy po nieudanej rejestracji pojawia się błąd.
test('does not show success message if registration fails', async () => {
    const { getByText, getByPlaceholderText } = render(<RejestracjaPage />);
  
    axios.post.mockRejectedValueOnce(new Error('Registration error'));
  
    fireEvent.changeText(getByPlaceholderText('LOGIN'), 'testuser');
    fireEvent.changeText(getByPlaceholderText('PASSWORD'), 'password123');
    fireEvent.changeText(getByPlaceholderText('EMAIL'), 'test@example.com');
  
    await fireEvent.press(getByText('Register'));
  
    expect(() => getByText('User successfully registered!')).toThrow();
  
    expect(Alert.alert).toHaveBeenCalledWith('Registration error', 'An unexpected error occurred.');
  });
  beforeEach(() => {
    axios.post.mockClear(); // Clear previous calls
  });
  test('does not call API with empty fields during registration', async () => {
    const { getByText, getByPlaceholderText } = render(<RejestracjaPage />);
  
    fireEvent.changeText(getByPlaceholderText('LOGIN'), ''); // Empty login
    fireEvent.changeText(getByPlaceholderText('PASSWORD'), ''); // Empty password
    fireEvent.changeText(getByPlaceholderText('EMAIL'), ''); // Empty email
  
    await fireEvent.press(getByText('Register'));
  
    expect(axios.post).not.toHaveBeenCalled();
  });
  beforeEach(() => {
    axios.post.mockClear(); // Clear previous calls
  });
  
  test('does not call API with empty login or password', async () => {
    const { getByText, getByPlaceholderText } = render(<Login />);
  
    const loginInput = getByPlaceholderText('Login');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');
  
    fireEvent.changeText(loginInput, ''); // Empty login
    fireEvent.changeText(passwordInput, ''); // Empty password
  
    fireEvent.press(loginButton);
  
    await waitFor(() => {
      expect(axios.post).not.toHaveBeenCalled();
    });
  });
  beforeEach(() => {
    axios.post.mockClear(); // Clear previous calls
  });
  test('shows error message if login or password is empty', async () => {
    const { getByText, getByPlaceholderText } = render(<Login />);
  
    const loginInput = getByPlaceholderText('Login');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByText('Login');
  
    fireEvent.changeText(loginInput, ''); // Empty login
    fireEvent.changeText(passwordInput, ''); // Empty password
  
    fireEvent.press(loginButton);
  
    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalledWith('Input Error', 'Login and password cannot be empty');
    });
  });
  