const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4];
    expect(_.contains(arr, 1)).toEqual(true);
  });

  it('returns false if an array does not contain the target', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4];
    expect(_.contains(arr, 5)).toEqual(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    // Your code goes here
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    expect(_.contains(obj, 1)).toEqual(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    // Your code goes here
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    expect(_.contains(obj, 5)).toEqual(false);
  });

});