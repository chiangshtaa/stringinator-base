const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    // Your code goes here
    const arr = [
      { name: 'Michael', age: 23 },
      { name: 'Kay', age: 24 },
      { name: 'Tim', age: 25 }
    ];
    expect(_.pluck(arr, 'age')).toEqual([23, 24, 25]);
  });

});