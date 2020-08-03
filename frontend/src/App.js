import React from 'react';
import './App.css';


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
            isDone: false,
        };
    }

    componentDidMount() {
        this.getQuestion(1);
    }

    endQuiz = () => {
        this.setState({isDone: true, q: "Quizen har ikke flere spørsmål.", answers: ["","","",""]});
        for (let button of document.getElementsByClassName("button")) {
            button.disabled = true;
        }
        document.getElementById("scoreLabel").style.visibility = "visible";

    }

    getQuestion = (id) => {
        fetch('http://localhost:8080/' + id).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                this.endQuiz()
            }}).then(data => this.setState({questionID: data.id, answers: [data.a1, data.a2, data.a3, data.a4], q: data.q, correctAnswer: data.correctAnswer}))
            .catch((error) => {
                console.log(error)
            });
    }

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


        // Instant feedback when guessing answers, and incrementing score if correct
        if (chosenButton === correctButton) {
            document.getElementById(chosenButton).style.backgroundColor = "green";
            this.incrementScore()
        }
        else {
                console.log(correctButton, chosenButton)
            document.getElementById(chosenButton).style.backgroundColor = "red";
            document.getElementById(correctButton).style.backgroundColor = "green";
        }

        // Disable all buttons after feedback is given
        for (let button of buttons) {
            button.disabled = true;
        }
        // Enable "next" button
        this.setState({nextDisabled: false})
    }

    buttonView = (props) => {
        const isDone = props.isDone;
        if (isDone) {
            return this.state.score;
        }
        let counter = 0;
        return
    }

    render() {
        let counter = 0;
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
                                  key={counter}
                              >
                                  {object}
                              </button>
                          );
                      })}
                  </div>
                  <button
                      onClick={() => this.handleNext()}
                      className={"nextButton"}
                      disabled={this.state.nextDisabled}
                  >
                      NESTE
                  </button>

                  <label id="scoreLabel">Din score ble: {this.state.score}/{this.state.maxScore}</label>
              </header>
          </div>
      );
  }


}

export default App;
