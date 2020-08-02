import React, {Component} from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import {slategrey, green, red} from "color-name";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            nextDisabled: true,
        };
    }

    componentDidMount() {
        console.log(this.state.score)
    }

    handleNext = () => {
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

    handleClick = (chosenButton) => {
        let correctButton = "but2"; // Just for the test purpose, I'm going to do this from backend
        let buttons = document.getElementsByClassName("button");

        if (chosenButton === correctButton) {
            document.getElementById(chosenButton).style.backgroundColor = "green";
            this.incrementScore()
        }
        else {
            document.getElementById(chosenButton).style.backgroundColor = "red";
            document.getElementById(correctButton).style.backgroundColor = "green";
        }
        for (let button of buttons) {
            button.disabled = true;
        }
        this.setState({nextDisabled: false})
    }

    render() {
      return (
          <div className="App">
              <header className="App-header">
                  <p>
                      PLACEHOLDER FOR QUESTION WITH THIS APPROXIMATE LENGTH
                  </p>
                  <div className="buttonContainer">
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
                  </div>

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
