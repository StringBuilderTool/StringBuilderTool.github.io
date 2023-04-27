package com.strbuildtool.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String getMain(Model model) {

        model.addAttribute("appName", "Bpring Tilder Bool");

        return "home";
    }
}
