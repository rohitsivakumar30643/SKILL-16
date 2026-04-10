package com.example.jwtsecurity.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @GetMapping("/add")
    public String add() {
        return "Admin added data";
    }

    @GetMapping("/delete")
    public String delete() {
        return "Admin deleted data";
    }
}