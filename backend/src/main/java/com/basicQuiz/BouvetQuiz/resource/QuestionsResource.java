package com.basicQuiz.BouvetQuiz.resource;


import com.basicQuiz.BouvetQuiz.questions.Question;
import com.basicQuiz.BouvetQuiz.repository.QuestionRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/questions")
public class QuestionsResource {

    private QuestionRepo questionRepo;

    public QuestionsResource(QuestionRepo questionRepo) {
        this.questionRepo = questionRepo;
    }

    @GetMapping("/all")
    public List<Question> getAll() {
        return questionRepo.findAll();
    }
}
