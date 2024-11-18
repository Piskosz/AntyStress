package com.example.antystress;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthController {

    @Autowired
    private RejestracjaRepository rejestracjaRepository;

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/testowy")
    public ResponseEntity<String> login(@RequestBody LoginPassword loginRequest) {
        logger.info("Received login request for user: {}", loginRequest.getLogin());
        String login = loginRequest.getLogin();
        String haslo = loginRequest.getHaslo();

        try {
            Rejestration user = rejestracjaRepository.getByLogin(login);

            if (user != null && user.getHaslo().equals(haslo)) {
                String token = generateJwtToken(login);
                logger.info("User authenticated successfully: {}", login);
                return ResponseEntity.ok(token);
            } else {
                logger.warn("Authentication failed for user: {}", login);
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Nieprawidłowy login lub hasło");
            }
        } catch (Exception e) {
            logger.error("Error during login process", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Wystąpił błąd podczas logowania. Spróbuj ponownie później.");
        }
    }

    private String generateJwtToken(String login) {
        return "wygenerowany_jwt_token";
    }
}
