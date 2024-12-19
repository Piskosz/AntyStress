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
| **Kroki testowe**       | 1.podanie loginu który przekracza 20 znaków <br> 2.podanie hasła które nie przekracza 20 znaków <br> 3.podanie prawidłowego maila 
 <br> 4.klikniecie przycisk register |
| **Oczekiwany rezultat** | dostanie komunikatu że login jest za długi                                              |

---

#### Test 3: Błędna rejestracja (haslo)

| **ID**                  | **3**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Błędna rejestracja (haslo)                                                                              |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       |1.podanie loginu który nie przekracza 20 znaków <br> 2.podanie hasła które przekracza 20 znaków <br> 3.podanie prawidłowego maila <br> 
 4.klikniecie przycisk register |
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

| **ID**                  | **1**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Błędne zalogowanie                                                                               |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       | 1.podanie loginu którego nie podawaliśmy przy rejestracji <br> 2.podanie hasła które podawaliśmy przy rejestracji  <br> 3.podanie prawidłowego maila <br> 4.klikniecie przycisk register |
| **Oczekiwany rezultat** | bład przy loginie i haśle                                             |

---

#### Test 10:  Błędne zalogowanie 

| **ID**                  | **1**                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tytuł**               | Błędne zalogowanie                                                                                 |
| **Warunki początkowe**  | Aplikacja jest otwarta i kliknięto rejestracja                                                                                      |
| **Kroki testowe**       | 1.podanie loginu którego nie podawaliśmy przy rejestracji <br> 2.podanie hasła które podawaliśmy przy rejestracji <br> 3.podanie prawidłowego maila <br> 4.klikniecie przycisk register |
| **Oczekiwany rezultat** | bład przy loginie i haśle                                              |

---
