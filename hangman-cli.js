// hangmang-cli.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

var inquirer = require('inquirer');
var Word = require('./hangman-word.js');

var words = ["climbing", "caribiner", "rope", "quickdraw", "crampons", "belay"];

var randoWord = words[Math.floor(Math.random() * words.length)]

console.log(randoWord);
function startGame() {
    var guessesRemaining = 9;
    var wordConstruct = new Word(randoWord)
    wordConstruct.generateLetterConArray()
    // console.log(wordConstruct)

    function askForUserInput() {
        inquirer.prompt([{
            type: "input",
            name: "userGuess",
            message: "please type in a letter to guess succa."
        }]).then(function (answer) {
            console.log(answer.userGuess)
            if (wordConstruct.checkUserGuess(answer.userGuess)) {
                console.log("good job");
                if (guessesRemaining > 0) {
                    if (wordConstruct.underscores.join("") !== randoWord) {
                        askForUserInput()
                    } else {
                        console.log("YOU WON!!!!!!");
                    }
                }
            } else {
                guessesRemaining = guessesRemaining - 1;
                if (guessesRemaining <= 0) {
                    console.log("YOU LOST BAD KID!!!!!");
                } else {
                    console.log("you got it wrong, try again. You have " + guessesRemaining + " left.");
                    askForUserInput()

                }
            }
        });
    }
    askForUserInput()

}
startGame()

