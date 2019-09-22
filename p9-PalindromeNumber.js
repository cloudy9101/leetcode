/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) { return false; }
  if(x === 0) { return true; }

  var arr = [];
  while (x > 0) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }

  for(var i = 0; i < arr.length / 2; i++) {
    if(arr[i] != arr[arr.length - i - 1]) {
      return false;
    }
  }
  return true;
};
