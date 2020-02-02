package com.john.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.john.demo.intercepter.InitInterceptor;

@Configuration
@ComponentScan("com.john")
public class BaseWebInterceptorConfig implements WebMvcConfigurer {

	protected final static String DEFAULT_PATHPATTERNS = "/**";
	protected final static String[] STATIC_PATHPATTERNS = { "/**/*.css", "/**/*.js", "/**/*.json", "/**/*.woff2", "/**/*.woff", "/**/*.ttf", "/**/*.jpg", "/**/*.png", "/**/*.ico" };

	@Autowired
	private InitInterceptor initInterceptor;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(initInterceptor).addPathPatterns(DEFAULT_PATHPATTERNS).excludePathPatterns(STATIC_PATHPATTERNS);
	}

}
