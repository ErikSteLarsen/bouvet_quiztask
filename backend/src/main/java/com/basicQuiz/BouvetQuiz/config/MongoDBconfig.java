package com.basicQuiz.BouvetQuiz.config;

import com.basicQuiz.BouvetQuiz.questions.Question;
import com.basicQuiz.BouvetQuiz.repository.QuestionRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = QuestionRepo.class)
@Configuration
public class MongoDBconfig {

    @Bean
    CommandLineRunner commandLineRunner(QuestionRepo question) {
        return strings -> question.save(new Question(1, 1, "testSporsmal", "testsvar", "testsvar","testsvar", "testsvar"));
    }
}
