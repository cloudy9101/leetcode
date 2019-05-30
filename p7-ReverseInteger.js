/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var rev = 0;
  while(x != 0) {
    var pop = x % 10;
    x = Math.floor(x / 10);
    rev = rev * 10 + pop;
    if(rev > 2 ** 31 || rev < -(2 ** 31)) {
      return 0;
    }
  }
  return rev;
}
