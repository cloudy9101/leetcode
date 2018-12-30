package main

import "fmt"

func twoSum(nums []int, target int) []int {
  return twoSumIter(nums, target, 0)
}

func twoSumIter(nums []int, target int, i int) []int {
  if len(nums) <= 1 {
    return []int{}
  }
  a := nums[0]
  for j, b := range(nums[1:]) {
    if a + b == target {
      return []int{i, i + j + 1}
    }
  }
  return twoSumIter(nums[1:], target, i + 1)
}

func main() {
  fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
}
