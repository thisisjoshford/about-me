import isYes from '../isYes.js';
const test = QUnit.test;

QUnit.module('Testing isYES function');

test('Yes is true', assert => {
    const input = 'Yes';
    const expected = true;
    const result = isYes(input);
    assert.equal(result, expected);
});