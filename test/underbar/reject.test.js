const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4, 5];
    expect(_.reject(arr, num => num % 2 === 1)).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    // Your code goes here
    const obj = {
      a: null,
      b: 1,
      c: 2,
      d: null
    };
    expect(_.reject(obj, element => element === null)).toEqual([1, 2]);
  });
});