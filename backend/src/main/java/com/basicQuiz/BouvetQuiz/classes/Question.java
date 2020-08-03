package com.basicQuiz.BouvetQuiz.classes;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Question {
    private Integer id;
    private Integer correctAnswer;
    private String q;
    private String a1;
    private String a2;
    private String a3;
    private String a4;

    public Question(Integer id, Integer correctAnswer, String q, String a1, String a2, String a3, String a4) {
        this.id = id;
        this.correctAnswer = correctAnswer;
        this.q = q;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(Integer correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public String getQ() {
        return q;
    }

    public void setQ(String q) {
        this.q = q;
    }

    public String getA1() {
        return a1;
    }

    public void setA1(String a1) {
        this.a1 = a1;
    }

    public String getA2() {
        return a2;
    }

    public void setA2(String a2) {
        this.a2 = a2;
    }

    public String getA3() {
        return a3;
    }

    public void setA3(String a3) {
        this.a3 = a3;
    }

    public String getA4() {
        return a4;
    }

    public void setA4(String a4) {
        this.a4 = a4;
    }
}
