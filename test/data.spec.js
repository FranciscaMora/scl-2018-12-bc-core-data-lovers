global.window=global;
global.assert=require('chai').assert
require('../src/data.js');
require('../src/data/lol/lol.js');


describe('LOL', () => {
  it('is an object', () => {
    window.assert.equal(typeof window.lol,'object');
  });

  // it('returns `example`', () => {
  //   expect(example()).toBe('example');
  // });
});
