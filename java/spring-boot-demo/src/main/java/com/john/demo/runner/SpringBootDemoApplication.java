package com.john.demo.runner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "com.john.demo" })
public class SpringBootDemoApplication {

    public static void main(String[] args) {
        SpringApplication application = new SpringApplication(SpringBootDemoApplication.class);
        application.run(args);
    }

}
