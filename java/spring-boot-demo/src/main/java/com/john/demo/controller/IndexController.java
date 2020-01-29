package com.john.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

    @RequestMapping(value = "/project1")
    public String project1() {
        return "project1/index";
    }

    @RequestMapping(value = "/myself")
    public String myself() {
        return "project-myself/index";
    }

    @RequestMapping(value = "/extdemo")
    public String extDemo() {
        return "project-extdemo/login";
    }

    @RequestMapping(value = "/layui")
    public String layuiDemo() {
        return "project-layui/index";
    }

    @RequestMapping(value = "/layui-backup")
    public String layuiBackupDemo() {
        return "project-layui/index-backup";
    }

    @RequestMapping(value = "/com1")
    public String com1() {
        return "project-com1/index";
    }

    @RequestMapping(value = "/com2")
    public String com2() {
        return "project-com2/index";
    }

}
