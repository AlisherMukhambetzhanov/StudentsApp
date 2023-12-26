package com.studentsapp;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.sql.Connection;
import java.sql.DriverManager;

@Configuration
public class AppConfig {

    @Bean
    public Connection sqlConnection() {
        try {
            String url = "jdbc:sqlite:/path/in/container/students_db.sqlite";

            return DriverManager.getConnection(url);
        } catch (Exception e) {
            throw new RuntimeException("Error connecting to the database", e);
        }
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*") // Разрешает все источники
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Разрешает все основные методы
                        .allowedHeaders("*"); // Разрешает все заголовки
            }
        };
    }
}

