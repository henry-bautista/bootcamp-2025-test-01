const assert = require('assert');
const { feedKitten } = require('../src/02.js');

describe('Hoisting and Hungry Kittens', () => {
  it('should print the correct feeding message', () => {
    let output = "";
    const originalLog = console.log;
    console.log = (message) => output = message;

    feedKitten();

    console.log = originalLog;
    assert.strictEqual(output, "Patches has been fed!");
  });
});