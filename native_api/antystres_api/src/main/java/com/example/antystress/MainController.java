package com.example.antystress;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {

    @Autowired
    RejestracjaRepository rejestracjaRepository;


    @GetMapping("/Rejestracja")
    public List<Rejestration> getall_3(){
        return rejestracjaRepository.getAll_3();
    }

    @PostMapping("Rejestracja/dodawanie/")
    public int add(@RequestBody List<Rejestration> rejestrations){
        return rejestracjaRepository.save2((List<Rejestration>) rejestrations);

    }
}


