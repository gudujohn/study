package com.john.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.john.demo.intercepter.InitInterceptor;

@Configuration
public class BaseWebInterceptorConfig extends WebMvcConfigurerAdapter {

    @Autowired
    private InitInterceptor initInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        String pathPatterns = "/**";
        registry.addInterceptor(initInterceptor).addPathPatterns(pathPatterns);
        super.addInterceptors(registry);
    }

}
