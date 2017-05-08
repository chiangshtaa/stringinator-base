const _ = require('./underbar');

const first = function(str, n) {
  // Your code goes here
  // return n === undefined ? str[0] : str.slice(0, n);
  return _.first(str, n);
};

const last = function(str, n) {
  // Your code goes here
  return _.last(str, n);
};

const removeChar = function(str, target) {
  // hint: use _.reject
  // Your code goes here
  return _.reject(str, element => element === target).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  // Your code goes here
  return _.some(str, element => element === target);
};

const isOnlyDigits = function(str) {
  // Your code goes here
  return _.every(str, element => !isNaN(element));
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
  return _.reject(str, element => (isNaN(element) || (element === ' '))).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
  return _.map(obj, currentValue => truncateString(currentValue, maxLength));
};

const countChars = function(str) {
  // Your code goes here
  let obj = {};
  _.each(str, char => {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  });
  return obj;
};

const dedup = function(str) {
  // Your code goes here
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};