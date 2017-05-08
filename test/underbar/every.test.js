const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      // Your code goes here
      const arr = [1, 2, 3, 4, 5];
      expect(_.every(arr)).toEqual(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      // Your code goes here
      const arr = [1, 3, 5, 7, 9];
      expect(_.every(arr, num => num % 2 === 1)).toEqual(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      // Your code goes here
      const arr = [1, 2, 3, 4, 5];
      expect(_.every(arr, num => num % 2 === 1)).toEqual(false);
    });

  });
});