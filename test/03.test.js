const assert = require('assert');
const { createCatRacer } = require('../src/03.js');

describe('Cat Race Tracker', () => {
  it('should independently track each cat\'s distance', () => {
    const racerPatches = createCatRacer('Patches');
    const racerSnowball = createCatRacer('Snowball');

    const mittensRun1 = racerPatches();
    const mittensRun2 = racerPatches();
    const whiskersRun1 = racerSnowball();

    assert.ok(mittensRun1.includes('Patches ran'));
    assert.ok(mittensRun2.includes('Patches ran'));
    assert.ok(whiskersRun1.includes('Snowball ran'));
  });
});
