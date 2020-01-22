// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

QUnit.module('Comparing Numbers Test');

test('is the guess lower?', assert => {
    //setup the user guess
    const userGuess = 9; //user input
    const expected = -1; //compare numbers function result
    const result = compareNumbers(userGuess, 10); //runs function and compares userGuess with correct number
    assert.equal(result, expected);//figures out if it works
});

test('are numbers identical', assert => {
    //setup the user guess
    const userGuess = 10 ;
    const expected = 0;
    const result = compareNumbers(userGuess, 10);
    assert.equal(result, expected);
});

test('is the guess higher?', assert => {
    //setup the user guess
    const userGuess = 11;
    const expected = 1;
    const result = compareNumbers(userGuess, 10);
    assert.equal(result, expected);
});