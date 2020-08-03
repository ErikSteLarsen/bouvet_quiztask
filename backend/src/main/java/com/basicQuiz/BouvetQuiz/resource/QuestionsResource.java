package com.basicQuiz.BouvetQuiz.resource;

import com.basicQuiz.BouvetQuiz.questions.Question;
import com.basicQuiz.BouvetQuiz.repository.QuestionRepo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuestionsResource {

    private QuestionRepo questionRepo;

    public QuestionsResource(QuestionRepo questionRepo) {
        this.questionRepo = questionRepo;
    }

    @GetMapping("/all")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Question> getAll() {
        return questionRepo.findAll();
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Question getQuestion(@PathVariable Integer id) {
        return questionRepo.findById(id)
                .orElseThrow(RuntimeException::new);
    }

    @GetMapping("/{id}/questionText")
    @CrossOrigin(origins = "http://localhost:3000")
    public @ResponseBody String getQuestionText(@PathVariable Integer id) {
        Question questionObject = questionRepo.findById(id).orElseThrow(RuntimeException::new);
        return questionObject.getQ();
    }
}
