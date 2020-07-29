import React, {useState} from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import {slategrey, green, red} from "color-name";

function App() {


  /*function isCorrect(buttons, correctButton) {
    for (let button of buttons) {
      console.log(button.id, correctButton, "hei")
      if (button.id == correctButton) {
        button.style.backgroundColor = "green"
      } else {
        button.style.backgroundColor = "red"
      }
    }
  }*/

  function handleClick(chosenButton) {
    let correctButton = "but2"; // Just for the test purpose, I'm going to do this from backend
    let buttons = document.getElementsByClassName("button");

    if (chosenButton == correctButton) {
      document.getElementById(chosenButton).style.backgroundColor = "green";
      for (let button of buttons) {
        button.disabled = true;
      }

    } else {
      let button = document.getElementById(chosenButton);
      button.style.backgroundColor = "red";
      button.disabled = true;
    }
  }

  function resetButtons() {
    let buttons = document.getElementsByClassName("button");
    for (let button of buttons) {
      button.disabled = false;
      button.style.backgroundColor = "slategray";
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          PLACEHOLDER FOR QUESTION WITH THIS APPROXIMATE LENGTH
        </p>
        <div className="buttonContainer">
            <button
                onClick={() => handleClick("but1")}
                className={"button"}
                id={"but1"}
            >
              GET FROM BACKEND
            </button>
            <button
                onClick={() => handleClick("but2")}
                className={"button"}
                id={"but2"}
            >
              GET FROM BACKEND
            </button>

            <button
                onClick={() => handleClick("but3")}
                className={"button"}
                id={"but3"}
            >
              GET FROM BACKEND
            </button>

            <button
                onClick={() => handleClick("but4")}
                className={"button"}
                id={"but4"}
            >
              GET FROM BACKEND
            </button>
        </div>

        <button
        onClick={() => resetButtons()}
        className={"asd"}
        >
        NESTE
        </button>
      </header>
    </div>
  );
}

export default App;
