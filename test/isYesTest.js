//links in the isYes function which is written in the isYes.js file
import isYes from '../isYes.js';
//sets the test value as this QUnit thingy
const test = QUnit.test;
//labels the module page
QUnit.module('Testing isYES function');
// labeling the test 'yes is true' assert is the argument 
test('Yes is true', assert => {
    //arrange
    //what is the input you want to test and set the variable input to that
    const input = 'Yes';
    //what do you expect the test result to be?
    const expected = true;
    //act
    //runs the isYes function with the input value
    const result = isYes(input);
    //assert
    //compare the result to expected using the assert function thats part of the QUnit suite
    assert.equal(result, expected);
});

test('No would be false', assert => {
    const input = 'No';
    const expected = false;
    const result = isYes(input);
    assert.equal(result, expected);
});

test('n would be false', assert => {
    const input = 'n';
    const expected = false;
    const result = isYes(input);
    assert.equal(result, expected);
});

test('yee would be false', assert => {
    const input = 'yee';
    const expected = false;
    const result = isYes(input);
    assert.equal(result, expected);
});
