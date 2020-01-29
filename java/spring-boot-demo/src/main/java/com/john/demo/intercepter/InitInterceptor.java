package com.john.demo.intercepter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@Component("initInterceptor")
public class InitInterceptor extends HandlerInterceptorAdapter {

	private static final transient Logger logger = LoggerFactory.getLogger(InitInterceptor.class);

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		logger.info(request.getRequestURI() + " execute.");

		request.setAttribute("base", "http://127.0.0.1:8081");
		request.setAttribute("systemVersion", "1.0");
		return true;
	}

}
