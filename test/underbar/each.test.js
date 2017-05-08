const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const arr = [1, 2, 3];
    let count = 0;
    _.each(arr, function(element, index, array) {
      expect(element).toEqual(array[index]);
      count ++;
    });
    expect(count).toBe(3);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    // Your code goes here
    const obj = {
      length: 3,
      a: 1,
      b: 2,
      c: 3,
    };
    let count = 0;
    _.each(obj, function(element, index, arrayLike) {
      expect(element).toEqual(arrayLike[index]);
      count++;
    });
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    // Your code goes here
    const obj = {
      a: 1,
      b: 2,
      c: 3
    };
    let count = 0;
    _.each(obj, function(value, key, obj) {
      expect(value).toEqual(obj[key]);
      count++;
    });
    expect(count).toBe(3);
  });
});

