const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    // Your code goes here
    const arr = [1, 2, 3];
    expect(_.map(arr, element => element * element)).toEqual([1, 4, 9]);
  });
});