/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  var longest = 0;
  for(var i = 0; i < s.length - 1; i++) {
    var balance = 0;
    for(var j = i; j < s.length; j++) {
      if(s[j] === "(") {
        balance++;
      } else {
        balance--;
      }
      if(balance === 0) {
        longest = (j - i + 1 > longest) ? j - i + 1 : longest
      } else if(balance < 0) {
        break;
      }
    }
  }
  return longest;
};
