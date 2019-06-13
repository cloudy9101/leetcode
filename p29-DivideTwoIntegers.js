/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var sign = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)
  var res = divideIter(Math.abs(dividend), Math.abs(divisor), 0, sign);
  return sign ? res : -res;
};

var divideIter = function(dividend, divisor, acc, sign) {
  if(dividend < divisor) { return acc; }
  var count = 1;
  var sum = divisor;
  while(dividend - sum > sum) {
    sum = sum << 1
    count = count << 1
  }
  if(sign && 2 ** 31 - 1 - acc <= count) {
    return 2 ** 31 - 1;
  }
  if(!sign && 2 ** 31 - acc <= count) {
    return 2 ** 31;
  }
  return divideIter(dividend - sum, divisor, acc + count, sign);
}
