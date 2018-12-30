package main

import "fmt"

func twoSum(nums []int, target int) []int {
  m := make(map[int]int)
  for i, num := range(nums) {
    complement := target - num
    j, ok := m[complement]
    if ok {
      return []int{j, i}
    }
    m[num] = i
  }
  return []int{}
}

func main() {
  fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
}
