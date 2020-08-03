package com.basicQuiz.BouvetQuiz.config;

import com.basicQuiz.BouvetQuiz.classes.Question;
import com.basicQuiz.BouvetQuiz.repository.QuestionRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@EnableMongoRepositories(basePackageClasses = QuestionRepo.class)
@Configuration
public class MongoDBconfig {

    @Bean
    CommandLineRunner commandLineRunner(QuestionRepo questions) {
        return strings -> {
            questions.save(new Question(1, 3, "Hvor mange kilometer har du løpt dersom du løper en engelsk mil?", "1,3 kilometer", "1,27 kilometer", "1,6 kilometer", "1,8 kilometer"));
            questions.save(new Question(2, 2, "I hvilket land ble Elon Musk født?", "Amerika", "Sør-Afrika", "Canada", "Romania"));
            questions.save(new Question(3, 1, "Hva heter den største øya i Norge? (sett bort ifra øygruppen Svalbard)", "Hinnøya", "Senja", "Sørøya", "Langøya"));
            questions.save(new Question(4, 4, "Hvor gammel er kong Harald V?", "82", "81", "84", "83"));
            questions.save(new Question(5, 3, "Hvor mange kilo kan et elefanthjerte veie?", "7", "14", "21", "24"));
            questions.save(new Question(6, 1, "Hvem er kjent for uttrykket 'survival of the fittest'?", "Charles Darwin", "Herbert Spencer", "Isaac Newton", "Albert Einstein"));
        };
    }
}
