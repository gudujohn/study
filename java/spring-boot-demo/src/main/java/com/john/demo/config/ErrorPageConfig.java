package com.john.demo.config;


import org.springframework.boot.web.server.ConfigurableWebServerFactory;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

@Configuration
public class ErrorPageConfig {
    // Spring2 之前
//    @Bean
//    public EmbeddedServletContainerCustomizer containerCustomizer() {
//        return new EmbeddedServletContainerCustomizer() {
//            @Override
//            public void customize(ConfigurableEmbeddedServletContainer container) {
//                ErrorPage error400Page = new ErrorPage(HttpStatus.BAD_REQUEST, "/error/400");
//                ErrorPage error403Page = new ErrorPage(HttpStatus.FORBIDDEN, "/error/403");
//                ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/error/404");
//                ErrorPage error500Page = new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/error/500");
//                container.addErrorPages(error400Page, error403Page, error404Page, error500Page);
//            }
//        };
//    }

    @Bean
    public WebServerFactoryCustomizer<ConfigurableWebServerFactory> webServerFactoryCustomizer() {
        //第一种：java7 常规写法
        return new WebServerFactoryCustomizer<ConfigurableWebServerFactory>() {
            @Override
            public void customize(ConfigurableWebServerFactory factory) {
                ErrorPage error400Page = new ErrorPage(HttpStatus.BAD_REQUEST, "/error/400");
                ErrorPage error403Page = new ErrorPage(HttpStatus.FORBIDDEN, "/error/403");
                ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/error/404");
                ErrorPage error500Page = new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/error/500");
                factory.addErrorPages(error400Page, error403Page, error404Page, error500Page);
            }
        };
        //第二种写法：java8 lambda写法
//        return (factory -> {
//            ErrorPage errorPage404 = new ErrorPage(HttpStatus.NOT_FOUND, "/error/400");
//            factory.addErrorPages(errorPage404);
//        });
    }
}