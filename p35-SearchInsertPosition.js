/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var left = 0, right = nums.length - 1, mid = 0
  if (nums[left] >= target) {
    return left
  }
  if (nums[right] < target) {
    return right + 1
  }
  if (nums[right] === target) {
    return right
  }

  while(left < right - 1) {
    mid = Math.round((left + right) / 2)
    if (nums[mid] > target) {
      right = mid
    } else if (nums[mid] < target) {
      left = mid
    } else {
      return mid
    }
  }

  return left + 1
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 0))
console.log(searchInsert([1,3], 2))
