package com.basicQuiz.BouvetQuiz;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class QuizController {
    @GetMapping("/api/test")
    public String test() {
        return "Testing, testing";
    }
}
