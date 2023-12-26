package com.studentsapp.dao;

import com.studentsapp.model.Student;

import java.util.List;

public interface StudentDAO {
    void addStudent(Student student);
    void deleteStudent(int studentId);
    Student getStudentById(int studentId);
    List<Student> getAllStudents();
}

