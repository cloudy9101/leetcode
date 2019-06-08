/**
 * @param {string} digits
 * @return {string[]}
 */
var mapping = {
  '2': ['a','b','c'],
  '3': ['d','e','f'],
  '4': ['g','h','i'],
  '5': ['j','k','l'],
  '6': ['m','n','o'],
  '7': ['p','q','r','s'],
  '8': ['t','u','v'],
  '9': ['w','x','y','z']
}

var letterCombinations = function(digits) {
  if(digits.length === 0) { return []; }
  var res = [];

  var letterCombinationsIterater = function(digits, prefix) {
    if(digits.length <= 0) {
      res.push(prefix);
      return;
    }
    var num = digits[0];
    for(var i = 0; i < mapping[num].length; i++) {
      letterCombinationsIterater(digits.slice(1), prefix + mapping[num][i]);
    }
  }

  letterCombinationsIterater(digits, "");
  return res;
};

console.log(letterCombinations("23"));
console.log(letterCombinations("7"));
console.log(letterCombinations(""));
