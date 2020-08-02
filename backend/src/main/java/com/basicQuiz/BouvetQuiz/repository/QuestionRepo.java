package com.basicQuiz.BouvetQuiz.repository;

import com.basicQuiz.BouvetQuiz.questions.Question;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface QuestionRepo extends MongoRepository<Question, Integer> {
}
