const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4, 5];
    expect(_.filter(arr, num => num % 2 === 1)).toEqual([1, 3, 5]);
  });

  it('filters an object to only numeric values', () => {
    // Your code goes here
    const obj = {
      name: 'Michael',
      a: 1,
      b: 2,
      c: 3
    };
    const nums = _.filter(obj, element => !isNaN(element));
    expect(nums).toEqual([1, 2, 3]);
  });
});