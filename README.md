# bouvet_quiztask
A basic quiz program made for an interview at Bouvet ASA.

## Frameworks and programming languages:
###### Backend: Java 11, Spring Boot 2.3.2
###### Frontend: React.js
###### Database: MongoDB 4.0

## High level description of how to run:

1. Make sure the above frameworks (correct versions as well) are installed and available on your computer.
1. On a fresh download of the repository you will need to create a folder for the database to operate in. Navigate to the `backend` directory and create an empty folder.
Once you are in this new empty folder run the command below to initialize the database:
    > mongod --dbpath=.

1. Once the database is initialized you can then start the Spring Boot backend (you need to build/compile the project). After that is taken care of you can:
    > run the main() method of BouvetQuizApplication
                                                                                                       
1. Then the last step is to start the frontend by navigating to the `frontend` directory and then executing the below commands:
    > npm install
    > npm start
                                                                                                                                 
                                                                                                                                 
*Note: Make sure to use all the correct versions of frameworks and languages to avoid encountering errors.*

![QuizApp Picture](/QuizApp.png)
