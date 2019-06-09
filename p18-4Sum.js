/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var res = [];
  nums = nums.sort(function(a, b) { return a - b; });
  for(var i = 0; i < nums.length - 3; i++) {
    if(nums[i] * 4 > target) { break; }
    while(i > 0 && nums[i] === nums[i - 1]) { i++; }
    for(var j = i + 1; j < nums.length - 2; j++) {
      if(nums[j] * 3 > target - nums[i]) { break; }
      while(j > i + 1 && nums[j] === nums[j - 1]) { j++; }
      for(var k = j + 1, h = nums.length - 1; k < h;) {
        var sum = nums[i] + nums[j] + nums[k] + nums[h];
        if(sum === target) {
          res.push([nums[i], nums[j], nums[k], nums[h]]);
          k++;
          h--;
        } else if(sum < target) {
          k++;
        } else {
          h--;
        }
        while(k > j + 1 && nums[k] === nums[k - 1]) { k++; }
        while(h < nums.length - 1 && nums[h] === nums[h + 1]) { h--; }
      }
    }
  }
  return res;
};
