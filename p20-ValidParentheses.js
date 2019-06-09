/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var left = ["(", "{", "["];
  var right = [")", "}", "]"];
  var stack = [];
  for(var i = 0; i < s.length; i++) {
    if(left.includes(s[i])) {
      stack.push(s[i]);
    } else {
      if(left.indexOf(stack.pop()) != right.indexOf(s[i])) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
