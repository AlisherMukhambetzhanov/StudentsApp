package com.studentsapp;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
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
}

