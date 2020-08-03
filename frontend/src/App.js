import React, {Component} from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import {slategrey, green, red} from "color-name";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionID: null,
            score: 0,
            maxScore: 0,
            nextDisabled: true,
            q: "Empty",
            answers: [],
            correctAnswer: null,
        };
    }

    componentDidMount() {
        this.getQuestion(1);
        //this.getQuestionText(1);
    }

    getQuestion = (id) => {
        fetch('http://localhost:8080/' + id)
            .then(response => response.json())
            .then(data => this.setState({questionID: data.id, answers: [data.a1, data.a2, data.a3, data.a4], q: data.q, correctAnswer: data.correctAnswer}));
    }

    /*getQuestionText = (id) => {
        fetch('http://localhost:8080/' + id + '/questionText')
            .then(response => response.json())
            .then(data => this.setState({q: data.q}));
    }*/

    handleNext = () => {
        this.getQuestion(this.state.questionID+1);
        let buttons = document.getElementsByClassName("button");
        for (let button of buttons) {
            button.disabled = false;
            button.style.backgroundColor = "slategray";
        }
        this.setState({nextDisabled: true})
    }

    incrementScore = () => {
        this.setState((state) => {
            return {score: state.score + 1}
        });
    }

    incrementMaxScore = () => {
        this.setState((state) => {
            return {maxScore: state.maxScore + 1}
        });
    }

    handleClick = (chosenButton) => {
        let correctButton = this.state.correctAnswer;
        let buttons = document.getElementsByClassName("button");

        chosenButton = this.state.answers.indexOf(chosenButton)+1

        this.incrementMaxScore();

        if (chosenButton === correctButton) {
            document.getElementById(chosenButton).style.backgroundColor = "green";
            this.incrementScore()
        }
        else {
                console.log(correctButton, chosenButton)
            document.getElementById(chosenButton).style.backgroundColor = "red";
            document.getElementById(correctButton).style.backgroundColor = "green";
        }
        for (let button of buttons) {
            button.disabled = true;
        }
        this.setState({nextDisabled: false})

        console.log(this.state.score)
    }


    render() {
        var counter = 0;
      return (
          <div className="App">
              <header className="App-header">
                  <p>
                      {this.state.q}
                  </p>
                  <div className="buttonContainer">
                  {this.state.answers.map((object) => {
                      counter += 1
                      return (
                          <button
                              onClick={() => this.handleClick(object)}
                              className={"button"}
                              id={counter}
                          >
                              {object}
                          </button>
                      );
                  })}
                  </div>

                  {/*<div className="buttonContainer">
                      <button
                          onClick={() => this.handleClick("but1")}
                          className={"button"}
                          id={"but1"}
                      >
                          GET FROM BACKEND
                      </button>
                      <button
                          onClick={() => this.handleClick("but2")}
                          className={"button"}
                          id={"but2"}
                      >
                          GET FROM BACKEND
                      </button>

                      <button
                          onClick={() => this.handleClick("but3")}
                          className={"button"}
                          id={"but3"}
                      >
                          GET FROM BACKEND
                      </button>

                      <button
                          onClick={() => this.handleClick("but4")}
                          className={"button"}
                          id={"but4"}
                      >
                          GET FROM BACKEND
                      </button>
                  </div>*/}

                  <button
                      onClick={() => this.handleNext()}
                      className={"nextButton"}
                      disabled={this.state.nextDisabled}
                  >
                      NESTE
                  </button>
              </header>
          </div>
      );
  }
}

export default App;
