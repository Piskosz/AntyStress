
# Antystress App

## Kurs 

Testowanie i Jakość Oprogramowania

## Autor

Hubert Kapuściński

## Temat Projektu

Aplikacja AntyStress - aplikacja antystresowa

## Opis Projektu

Aplikacja Antystress - aplikacja stworzona przy użyciu React Native która pozwala użytkowniką oglądać śmieszne filmy i memy.

-Rejeestracja/logowanie
-Ogladanie śmiesznych memów i filmów
-Mierzenie stresu 

## **Instalacja i uruchomienie aplikacji:**

1. **Pobierz projekt:**

- Skopiuj lub pobierz projekt z repozytorium.

2. **Zainstaluj Node.js:**

- Pobierz i zainstaluj [Node.js](https://nodejs.org/).
- Node.js zawiera `npm`, który jest wymagany do instalacji zależności projektu.

3. **Zainstaluj Expo CLI:**

- W terminalu wpisz następującą komendę, aby zainstalować Expo CLI globalnie:
```bash
npm install -g expo-cli
```

4. **Zainstaluj zależności projektu:**

- W terminalu przejdź do folderu projektu:
```bash
cd folder-z-projektem
```
- Następnie zainstaluj wszystkie wymagane zależności:
```bash
npm install

5. **Uruchom projekt:**

- W folderze projektu uruchom serwer deweloperski Expo:
```bash
npx expo start
```
- Po chwili w terminalu lub w przeglądarce pojawi się kod QR.

6. **Uruchom aplikację na telefonie:**
- Upewnij się, że Twój telefon i komputer są w tej samej sieci Wi-Fi.
- Otwórz aplikację **Expo Go** na swoim telefonie i zeskanuj kod QR wyświetlony w terminalu lub w przeglądarce.
- W terminalu pojawią się także inne opcje uruchomienia aplikacji, takie jak:
- [Budowa wersji deweloperskiej](https://docs.expo.dev/develop/development-builds/introduction/) (development build),
- [Emulator Androida](https://docs.expo.dev/workflow/android-studio-emulator/),
- [Symulator iOS](https://docs.expo.dev/workflow/ios-simulator/),
- **Expo Go**, czyli środowisko testowe umożliwiające szybkie sprawdzanie aplikacji.
     
## Testy Jednostkowe

Test 1: 'renders login component correctly'<br>

Opis: Sprawdza, czy komponent Login renderuje wszystkie wymagane elementy, takie jak pole loginu, hasła i przycisk "Login".<br>
Test 2: 'changes login state when user types'<br>

Opis: Sprawdza, czy zmiana tekstu w polu "Login" aktualizuje stan komponentu.<br>
Test 3: 'changes password state when user types'<br>

Opis: Sprawdza, czy zmiana tekstu w polu "Password" aktualizuje stan komponentu.<br>
Test 4: 'updates login state on text input'<br>

Opis: Sprawdza, czy stan loginu poprawnie aktualizuje się po wprowadzeniu tekstu w polu "Login".<br>
Test 5: 'password input is secure'<br>

Opis: Sprawdza, czy pole "Password" ma włączone ukrywanie tekstu (secureTextEntry).<br>
Test 6: 'renders RejestracjaPage component correctly'<br>

Opis: Sprawdza, czy komponent RejestracjaPage renderuje wszystkie wymagane elementy, takie jak pola loginu, hasła, emaila oraz przycisk "Register".<br>
Test 7: 'shows validation error when login is empty'<br>

Opis: Sprawdza, czy pojawia się błąd walidacji, gdy login jest pusty i użytkownik kliknie przycisk "Register".<br>
Test 8: 'updates login, password, and email correctly'<br>

Opis: Sprawdza, czy wartości formularza loginu, hasła i emaila są poprawnie aktualizowane po wprowadzeniu tekstu w odpowiednich polach.<br>
Test 9: 'shows validation error for invalid email format'<br>

Opis: Sprawdza, czy pojawia się błąd walidacji, gdy wpisany format emaila jest niepoprawny i użytkownik kliknie przycisk "Register".<br>
Test 10: 'shows validation error if login or password is empty'<br>

Opis: Sprawdza, czy pojawia się błąd walidacji, gdy login lub hasło są puste, a użytkownik kliknie przycisk "Register". Weryfikuje, czy zostanie wywołane Alert.alert z odpowiednim komunikatem o błędzie.<br>

## Testy Integracyjne

Test 1: calls handleLogin function when login button is pressed<br>

Testuje, czy po naciśnięciu przycisku login wysyłane jest żądanie do API z odpowiednimi parametrami.<br>
Test 2: shows error alert when login fails<br>

Testuje, czy w przypadku nieudanego logowania wyświetlany jest odpowiedni komunikat błędu.<br>
Test 3: navigates to main page on successful login<br>

Testuje, czy po udanym logowaniu następuje nawigacja do głównej strony.<br>
Test 4: does not navigate on failed login attempt<br>

Testuje, czy po nieudanym logowaniu nie dochodzi do nawigacji.<br>
Test 5: shows error alert on failed login<br>

Testuje, czy po nieudanym logowaniu wyświetlany jest alert z odpowiednią wiadomością.<br>
Test 6: displays success message on successful registration<br>

Testuje, czy po udanej rejestracji wyświetla się komunikat o sukcesie.<br>
Test 7: does not show success message if registration fails<br>

Testuje, czy nie pojawia się komunikat o sukcesie, jeśli rejestracja nie powiodła się.<br>
Test 8: does not call API with empty fields during registration<br>

Testuje, czy nie jest wywoływane API, gdy pola rejestracji są puste.<br>
Test 9: does not call API with empty login or password<br>

Testuje, czy nie jest wywoływane API, gdy login lub hasło są puste.<br>
Test 10: shows error message if login or password is empty<br>

Testuje, czy wyświetlany jest komunikat o błędzie, gdy login lub hasło są puste.<br>
## Testy Manualne
#### Test 1 

#### Test 1: Prawidłowa Rejestracja

| **ID**                  | **1**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Prawidłowa Rejestracja                                                                                |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       | 1.podanie loginu który nie przekracza 20 znaków  <br> 2.podanie hasła które nie przekracza 20 znaków  <br> 3.podanie prawidłowego maila  <br> 4.klikniecie przycisk register |
| **Oczekiwany rezultat** | dostanie komunikatu że user prawidłowo się zarejestrował                                                 |

---

#### Test 2: Tytuł Błędna rejestracja (login)

| **ID**                  | **2**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Tytuł Błędna rejestracja (login)                                                                              |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       | 1.podanie loginu który przekracza 20 znaków <br> 2.podanie hasła które nie przekracza 20 znaków <br> 3.podanie prawidłowego maila <br> 4.klikniecie przycisk register |
| **Oczekiwany rezultat** | dostanie komunikatu że login jest za długi                                              |

---

#### Test 3: Błędna rejestracja (haslo)

| **ID**                  | **3**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Błędna rejestracja (haslo)                                                                              |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       |1.podanie loginu który nie przekracza 20 znaków <br> 2.podanie hasła które przekracza 20 znaków <br> 3.podanie prawidłowego maila <br> 4.klikniecie przycisk register |
| **Oczekiwany rezultat** | dostanie komunikatu że haslo jest za długie                                              |

---

#### Test 4: Błędna rejestracja (email)

| **ID**                  | **4**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Błędna rejestracja (email)                                                                               |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       | 1.podanie loginu który nie przekracza 20 znaków <br> 2.podanie hasła które nie przekracza 20 znaków <br> 3.podanie maila który nie jest prawidłowy <br> 4.klikniecie przycisk register |
| **Oczekiwany rezultat** | dostanie komunikatu że mail jest źle napisany                                            |

---

#### Test 5: Błedna rejestracja nie podanie danych

| **ID**                  | **5**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Błedna rejestracja nie podanie danych                                                                              |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       | 1.nie podanie loginu  <br> 2.nie podanie hasla  <br> 3.podanie prawidłowego maila <br> 4.klikniecie przycisk register |
| **Oczekiwany rezultat** | dostanie ze nie podano loginu i hasla                                              |

---

#### Test 6: Błędna rejestracja (email)

| **ID**                  | **6**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Błędna rejestracja (email)                                                                              |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       | 1.podanie loginu który nie przekracza 20 znaków <br> 2.podanie hasła które nie przekracza 20 znaków <br> 3.podanie drugi raz tego samego emaila <br> 4.klikniecie przycisk register |
| **Oczekiwany rezultat** | dostanie błędu rejestracji                                           |

---

#### Test 7: Prawidłowe zalogowanie

| **ID**                  | **7**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Prawidłowe zalogowanie                                                                               |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto login                                                                                      |
| **Kroki testowe**       | 1.podanie loginu który przedtem podaliśmy przy rejestracji <br> 2.podanie hasła który przedtem podaliśmy przy rejestracji <br> 3.klikniecie przycisk login |
| **Oczekiwany rezultat** | zalogowanie sie na konto                                       |

---

#### Test 8: Błędne zalogowanie 

| **ID**                  | **8**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Błędne zalogowanie                                                                               |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       | 1.podanie loginu który przedtem podaliśmy przy rejestracji <br> 2.podanie hasła którego nie podawaliśmy przy rejestracji <br> 3.klikniecie przycisk login |
| **Oczekiwany rezultat** | bład przy loginie i haśle                                            |

---

#### Test 9: Błędne zalogowanie 

| **ID**                  | **9**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Błędne zalogowanie                                                                               |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       | 1.podanie loginu którego nie podawaliśmy przy rejestracji <br> 2.podanie hasła które podawaliśmy przy rejestracji  <br> 3.podanie prawidłowego maila <br> 4.klikniecie przycisk register |
| **Oczekiwany rezultat** | bład przy loginie i haśle                                             |

---

#### Test 10:  Błędne zalogowanie 

| **ID**                  | **10**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Błędne zalogowanie                                                                                 |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       | 1.podanie loginu którego nie podawaliśmy przy rejestracji <br> 2.podanie hasła które podawaliśmy przy rejestracji <br> 3.podanie prawidłowego maila <br> 4.klikniecie przycisk register |
| **Oczekiwany rezultat** | bład przy loginie i haśle                                              |

---
