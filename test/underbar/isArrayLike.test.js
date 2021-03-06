const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    // Your code goes here
    expect(_.isArrayLike([1, 2, 3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    // Your code goes here
    const obj = {
      length: 5,
      a: 'hello'
    };
    expect(_.isArrayLike(obj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    // Your code goes here
    const obj = {
      a: 1,
      b: 2
    };
    expect(_.isArrayLike(obj)).toBe(false);
  });
});
