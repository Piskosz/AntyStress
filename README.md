
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
