/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort(function(a, b) { return a - b; });
  var res = nums[0] + nums[1] + nums[2];
  for(var i = 0; i < nums.length - 2; i++) {
    for(var j = i + 1, k = nums.length - 1; j < k;) {
      var nres = nums[i] + nums[j] + nums[k];
      if(Math.abs(nres - target) < Math.abs(res - target)) {
        res = nres;
      }
      if(nres < target) {
        j++;
      } else if (nres > target) {
        k--;
      } else {
        return res;
      }
    }
  }
  return res;
};
