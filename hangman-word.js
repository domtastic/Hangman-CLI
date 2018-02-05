// Word.js: Contains a constructor, Word that depends on the Letter constructor.This is used to create an object representing the current word the user is attempting to guess.That means the constructor should define://

// An array of new Letter objects representing the letters of the underlying word//

// A function that returns a string representing the word.This should call the function on each letter object(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.//

// A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in Letter.js)

var Letter = require('./hangman-letter.js');

function Word(word) {
    this.word = word;

    this.letterConArray = [];

    this.underscores = [];

    //loop over our word
    // take each letter and make it inherit all the  letter object stuff
    //push those letters to the letterConArray

    this.generateLetterConArray = function () {
        for (var i = 0; i < this.word.length; i++) {
            this.letterConArray.push(new Letter(this.word[i]))
        }
        console.log(this.letterConArray);
        this.generateWordString()
    }

    this.generateWordString = function () {
        for (var i = 0; i < this.letterConArray.length; i++) {
            this.underscores.push(this.letterConArray[i].isLetGuessed())
        }
        console.log(this.underscores.join(" "));
    }

    this.checkUserGuess = function (userGuess) {
        var guessWasCorrect = false
        for (var i = 0; i < this.letterConArray.length; i++) {
            if (this.letterConArray[i].updateGuessed(userGuess)) {
                this.underscores[i] = this.letterConArray[i].isLetGuessed();
                guessWasCorrect = true;
            }
        }
        console.log(this.underscores.join(" "));
        return guessWasCorrect
    }

}

module.exports = Word;