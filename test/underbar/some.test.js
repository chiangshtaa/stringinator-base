const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4, 5];
    expect(_.some(arr, num => num % 2 === 1)).toEqual(true);
  });

  it('returns false if no number is odd', () => {
    // Your code goes here
    const arr = [0, 2, 4, 6, 8];
    expect(_.some(arr, num => num % 2 === 1)).toEqual(false);
  });

});