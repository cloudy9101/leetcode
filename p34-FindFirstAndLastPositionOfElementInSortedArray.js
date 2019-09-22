/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function(nums, target) {
//   if(nums.length === 0) { return [-1, -1]; }
//   return searchRangeIter(nums, target, 0);
// };

// var searchRangeIter = function(nums, target, base) {
//   if (nums.length === 1 && nums[0] === target) {
//     return [base, base]
//   }
//   if (nums.length <= 1) { return [-1, -1] }

//   var mid = Math.round((nums.length - 1) / 2)
//   if (nums[mid] > target) {
//     return searchRangeIter(nums.slice(0, mid), target, base)
//   } else if (nums[mid] < target) {
//     return searchRangeIter(nums.slice(mid + 1), target, base + mid + 1)
//   } else {
//     left = mid
//     right = mid
//     while(nums[left - 1] === target) {
//       left -= 1
//     }
//     while(nums[right + 1] === target) {
//       right += 1
//     }
//     return [base + left, base + right]
//   }
// }

var searchRange = function(nums, target) {
  if (nums.length === 1 && nums[0] === target) {
    return [0, 0]
  }
  if (nums.length <= 1) { return [-1, -1] }

  var left = 0, right = nums.length - 1
  var mid

  while(left < right) {
    mid = Math.round((left + right - 1) / 2)
    if (nums[mid] >= target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  var realLeft = nums[right] === target ? right : -1

  left = realLeft, right = nums.length - 1

  while(left < right) {
    mid = Math.round((left + right) / 2)
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid
    }
  }
  var realRight = nums[left] === target ? left : -1


  return [realLeft, realRight]
}

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([1], 1));
console.log(searchRange([1, 3], 1));
console.log(searchRange([0,0,1,2,3,3,4], 2));
console.log(searchRange([1,2,3], 3));
console.log(searchRange([0,0,2,3,4,4,4,5], 5));

