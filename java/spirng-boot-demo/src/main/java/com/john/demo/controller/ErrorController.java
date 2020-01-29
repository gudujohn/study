package com.john.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ErrorController {

    @RequestMapping(value = "/error/{code}")
    public String error(@PathVariable int code, Model model) {
        String pager = "/error";
        switch (code) {
            case 400:
                model.addAttribute("code", 400);
                pager = pager + "/400";
                break;
            case 403:
                model.addAttribute("code", 403);
                pager = pager + "/403";
                break;
            case 404:
                model.addAttribute("code", 404);
                pager = pager + "/404";
                break;
            default:
                model.addAttribute("code", 500);
                pager = pager + "/500";
                break;
        }
        return pager;
    }

}
