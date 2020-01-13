package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 */
@RestController
public class DemoController {

    @RequestMapping(value = "/api", method = RequestMethod.GET)
    @CrossOrigin(origins = "*") //TODO change me!
    public String msg() {
        return "You get to the backend!";
    }
}
