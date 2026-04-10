package com.example.studentcru.controller;
import com.example.studentcru.model.Student;
import com.example.studentcru.service.StudentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/students")
public class StudentController {
    private final StudentService service;
    public StudentController(StudentService service) {
        this.service = service;
    }
    @Operation(summary = "Add a new student", 
               description = "Creates and saves a new student record in the database")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Student created successfully"),
        @ApiResponse(responseCode = "400", description = "Invalid input data")
    })
    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        return service.saveStudent(student);
    }
    @Operation(summary = "Get all students", 
               description = "Fetches the list of all students")
    @ApiResponse(responseCode = "200", description = "Students retrieved successfully")
    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }
    @Operation(summary = "Get student by ID", 
               description = "Fetches a student based on the given ID")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Student found"),
        @ApiResponse(responseCode = "404", description = "Student not found")
    })
    @GetMapping("/{id}")
    public Student getStudent(@PathVariable Long id) {
        return service.getStudentById(id);
    }
    @Operation(summary = "Update student", 
               description = "Updates the details of an existing student")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Student updated successfully"),
        @ApiResponse(responseCode = "404", description = "Student not found")
    })
    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Long id,
                                 @RequestBody Student student) {
        return service.updateStudent(id, student);
    }

    @Operation(summary = "Delete student", 
               description = "Deletes a student based on the given ID")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Student deleted successfully"),
        @ApiResponse(responseCode = "404", description = "Student not found")
    })
    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable Long id) {
        service.deleteStudent(id);
        return "Student deleted successfully";
    }
}