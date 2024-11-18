package com.example.antystress;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Rejestration {

    private int id;
    private String Login;
    private String Haslo;
    private String Mail;
}
