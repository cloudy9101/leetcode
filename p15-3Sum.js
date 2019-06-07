/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort(function(a, b) { return a - b; });
  var res = [];
  for(var i = 0; i < nums.length - 2; i++) {
    if(nums[i] > 0) { return res; }

    if(i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    var left = i + 1;
    var right = nums.length - 1;
    for(var left = i + 1, right = nums.length - 1; left < right;) {
      if(nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while(nums[left] === nums[left - 1]) {
          left++;
        }
        while(nums[right] === nums[right + 1]) {
          right--;
        }
      } else if(nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
}
