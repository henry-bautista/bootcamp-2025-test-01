const assert = require('assert');
const { createCatCounter } = require('../src/01.js');

describe('Cat Counter Closure', () => {
  it('should count meows correctly', () => {
    const catCounter = createCatCounter();
    assert.strictEqual(catCounter(), 1);
    assert.strictEqual(catCounter(), 2);
    assert.strictEqual(catCounter(), 3);

    const anotherCatCounter = createCatCounter();
    assert.strictEqual(anotherCatCounter(), 1);
  });
});
