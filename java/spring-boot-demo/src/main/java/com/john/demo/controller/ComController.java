package com.john.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ComController {

    @RequestMapping(value = "/com1/about")
    public String about1() {
        return "project-com1/about";
    }

    @RequestMapping(value = "/com1/case")
    public String case1() {
        return "project-com1/case";
    }

    @RequestMapping(value = "/com1/details")
    public String details1() {
        return "project-com1/details";
    }

    @RequestMapping(value = "/com1/service")
    public String service1() {
        return "project-com1/service";
    }

    @RequestMapping(value = "/com2/about")
    public String about2() {
        return "project-com2/about";
    }

    @RequestMapping(value = "/com2/case")
    public String case2() {
        return "project-com2/case";
    }

    @RequestMapping(value = "/com2/news")
    public String news2() {
        return "project-com2/news";
    }

    @RequestMapping(value = "/com2/newsDetail")
    public String newsDetail2() {
        return "project-com2/newsDetail";
    }

    @RequestMapping(value = "/com2/product")
    public String product2() {
        return "project-com2/product";
    }

}
