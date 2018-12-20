package main

import "fmt"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
  size := (len(nums1) + len(nums2))
  mid := size / 2
  odd := size % 2 != 0
  if odd { mid++ }
  f := findNext(nums1, nums2)
  var res float64
  for {
    pos, num := f()
    if pos >= mid {
      if odd {
        res = float64(num)
      } else {
        _, num2 := f()
        res = float64(num + num2) / 2.0
      }
      break
    }
  }
  return res
}

func findNext(nums1 []int, nums2 []int) (func() (int, int)) {
  var i, j, cur, pos int
  return func() (int, int) {
    if i < len(nums1) && j < len(nums2) {
      if nums1[i] < nums2[j] {
        cur = nums1[i]
        i++
      } else {
        cur = nums2[j]
        j++
      }
    } else if i < len(nums1) {
      cur = nums1[i]
      i++
    } else if j < len(nums2){
      cur = nums2[j]
      j++
    }
    fmt.Println(cur)
    pos++
    return pos, cur
  }
}

func main() {
  nums1 := []int{1,3}
  nums2 := []int{2}
  fmt.Println(findMedianSortedArrays(nums1, nums2))
}
