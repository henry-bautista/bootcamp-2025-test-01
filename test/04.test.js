const assert = require('assert');
const { putKittensToSleep } = require('../src/04.js');

describe('Sleeping Kittens', () => {
  it('should print each kitten\'s sleep message correctly', (done) => {
    var kittens = ['TinyEvil', 'Snowball', 'Patches'];
    const logs = [];
    const originalLog = console.log;
    console.log = (message) => logs.push(message);

    putKittensToSleep();

    setTimeout(() => {
      console.log = originalLog;
      assert.strictEqual(logs.length, 3);
      assert.ok(logs[0].includes('TinyEvil'));
      assert.ok(logs[1].includes('Snowball'));
      assert.ok(logs[2].includes('Patches'));
      done();
    }, 4000);
  });
});
