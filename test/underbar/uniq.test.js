const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    // Your code goes here
    const arr = [1, 2, 3, 4, 1, 2, 1, 4, 5];
    expect(_.uniq(arr)).toEqual([1, 2, 3, 4, 5]);
  });
});