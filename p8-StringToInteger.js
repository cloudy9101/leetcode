/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var result = 0;
  var sign = 1;
  var start = false;
  for(var s of str) {
    if(!start) {
      if(isSpace(s)){
        continue;
      } else if (isPlus(s)) {
        start = true;
        continue;
      } else if(isMinus(s)) {
        start = true;
        sign = -1;
        continue;
      }
    }

    if(notNum(s)) {
      return result * sign;
    }

    start = true;
    if(sign === 1 && num(s) > 2 ** 31 - 1 - result * 10) {
      return 2 ** 31 - 1;
    } else if (sign === -1 && num(s) > 2 ** 31 - result * 10) {
      return -(2 ** 31);
    }
    result = result * 10 + num(s);
  }
  return result * sign;
};

var notNum = function(s) {
  var code = s.charCodeAt(0);
  return code > 57 || code < 48;
}

var num = function(s) {
  var code = s.charCodeAt(0);
  return code - 48;
}

var isSpace = function(s) {
  var code = s.charCodeAt(0);
  return code === 32;
}

var isPlus = function(s) {
  var code = s.charCodeAt(0);
  return code === 43;
}

var isMinus = function(s) {
  var code = s.charCodeAt(0);
  return code === 45;
}

console.log(myAtoi("0-1"));
