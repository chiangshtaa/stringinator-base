const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    // Your code goes here
    const arr = ['a', 'b', 'c'];
    expect(_.indexOf(arr, 'a')).toEqual(0);
  });

  it('returns the index of a value at the end of an array', () => {
    // Your code goes here
    const arr = ['a', 'b', 'c'];
    expect(_.indexOf(arr, 'c')).toEqual(2);
  });

  it('returns -1 for a missing value', () => {
    // Your code goes here
    const arr = ['a', 'b', 'c'];
    expect(_.indexOf(arr, 'd')).toEqual(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    // Your code goes here
    const arr = ['a', 'b', 'a'];
    expect(_.indexOf(arr, 'a')).toEqual(0);
  });

  it('starts searching at the given offset', () => {
    // Your code goes here
    const arr = ['a', 'b', 'c', 'a'];
    expect(_.indexOf(arr, 'a', 2)).toEqual(3);
  });

});