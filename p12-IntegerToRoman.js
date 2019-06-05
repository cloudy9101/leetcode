/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  var symbols = ["I", "V", "X", "L", "C", "D", "M"];
  var res = [];
  var nums = [];
  while(num > 0) {
    nums.push(num % 10);
    num = Math.floor(num / 10);
  }
  var j = 0;
  for(var i = 0; i < nums.length; i++) {
    var r = "";
    if(nums[i] === 9) {
      r = symbols[j] + symbols[j + 2];
    } else if(nums[i] > 4) {
      r = symbols[j + 1] + symbols[j].repeat(nums[i] - 5);
    } else if(nums[i] === 4) {
      r = symbols[j] + symbols[j + 1];
    } else {
      r = symbols[j].repeat(nums[i]);
    }
    res.unshift(r);
    j = j + 2;
  }
  return res.join("");
};
