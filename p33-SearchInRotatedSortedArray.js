/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return searchWithBase(nums, target, 0);
};

var searchWithBase = function(nums, target, base) {
  if(nums.length === 1) {
    if(nums[0] === target) {
      return base;
    } else {
      return -1;
    }
  }

  var pos = Math.floor(nums.length / 2);
  var lastPos = nums.length - 1;
  if(target > nums[0]) {
    if(target <= nums[pos] || nums[0] > nums[pos]) {
      return searchWithBase(nums.slice(0, pos), target, base);
    } else if(nums[0] <= nums[pos]) {
      return searchWithBase(nums.slice(pos), target, base + pos);
    }
  } else if(target < nums[lastPos]) {
    if(target >= nums[pos] || nums[lastPos] < nums[pos]) {
      return searchWithBase(nums.slice(pos), target, base + pos);
    } else if(nums[lastPos] >= nums[pos]) {
      return searchWithBase(nums.slice(0, pos), target, base);
    }
  } else if(target === nums[pos]) {
    return base + pos;
  } else if(target === nums[0]) {
    return base + 0;
  } else if(target === nums[lastPos]) {
    return base + lastPos;
  } else {
    return -1;
  }
}

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([1], 1))
console.log(search([1, 3], 0))
console.log(search([3, 1], 3))
console.log(search([5, 1, 3], 1))
