//import the compareNumbers function from the JavaScript file
import compareNumbers from './compareNumbers.js';
//get stuff rom the DOM
const userGuess = document.getElementById('number-guess');
const submitButton = document.getElementById('submit-button');
const triesDisplay = document.getElementById('remTries');
const hiLoDisplay = document.getElementById('hiLoDisplay');
//sets tries to 4 and allows variable to change
let tries = 4;
//creates random decimal number then rounds down and multiplies 
let correctNumber = Math.floor(Math.random() * 10);
//tells the submit button to listen for a click and them perform a function
submitButton.addEventListener('click', () => {
    //removes 1 from tries each time user clicks
    tries--;
    //sets 
    const val = Number(userGuess.value);
    //prints the user guess and compare number (for testing purposes)
    console.log(correctNumber, val);
    //prints the result of the compareNumbers function (for testing purposes)
    console.log(compareNumbers(val, correctNumber));
    //sets the display data for the DOM to update to number of tries
    triesDisplay.textContent = tries;
    //runs compare function to see if guess is too high (1 value) and updates display to DOM
    if (compareNumbers(val, correctNumber) === 1) {
        hiLoDisplay.textContent = 'Your Guess is too high';
    }
    //runs compare function to see if guess is too low (-1 value) and updates display to DOM
    if (compareNumbers(val, correctNumber) === -1) {
        hiLoDisplay.textContent = 'Your Guess is too low';
    }
    //runs compare function to see if guess correct (0) and updates display to DOM
    if (compareNumbers(val, correctNumber) === 0) {
        hiLoDisplay.textContent = 'Your Guess is correct!';
    }
    //checks to see if the number of tries is 0 and we did not guess the correct number (!) then updates the display to DOM
    if (tries === 0 && compareNumbers(val, correctNumber) !== 0) {
        hiLoDisplay.textContent = 'Sorry... you lost!';
    }
});
