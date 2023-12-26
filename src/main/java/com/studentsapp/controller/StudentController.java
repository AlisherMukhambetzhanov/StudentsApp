package com.studentsapp.controller;

import com.studentsapp.dao.StudentDAO;
import com.studentsapp.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentDAO studentDAO;

    @GetMapping
    public List<Student> getAllStudents() {
        return studentDAO.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable int id) {
        return studentDAO.getStudentById(id);
    }

    @PostMapping
    public void addStudent(@RequestBody Student student) {
        studentDAO.addStudent(student);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable int id) {
        studentDAO.deleteStudent(id);
    }
}

