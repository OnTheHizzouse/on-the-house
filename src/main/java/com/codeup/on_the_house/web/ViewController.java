package com.codeup.on_the_house.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping({"/", "/login", "/home", "/profile", "/events", "/about"})
    public String showView(){
        return "forward:/index.html";
    }
}
