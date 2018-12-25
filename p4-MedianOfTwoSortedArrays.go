package main

import "fmt"
import "math"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
  if len(nums1) > len(nums2) {
    nums1, nums2 = nums2, nums1
  }
  m, n := len(nums1), len(nums2)
  imin, imax, halflen := 0, m, (m + n + 1) / 2
  var i, j int
  for imin <= imax {
    i = (imin + imax) / 2
    j = halflen - i
    if i < imax && nums2[j - 1] > nums1[i] {
      imin++
    } else if i > imin && nums1[i - 1] > nums2[j] {
      imax--
    } else {
      var maxLeft float64
      if i == 0 {
        maxLeft = float64(nums2[j - 1])
      } else if j == 0 {
        maxLeft = float64(nums1[i - 1])
      } else {
        maxLeft = math.Max(float64(nums1[i - 1]), float64(nums2[j - 1]))
      }
      if (m + n) % 2 != 0 {
        return maxLeft
      }

      var minRight float64
      if i == m {
        minRight = float64(nums2[j])
      } else if j == n {
        minRight = float64(nums1[i])
      } else {
        minRight = math.Min(float64(nums1[i]), float64(nums2[j]))
      }

      return (maxLeft + minRight) / 2
    }
  }
  return 0.0
}

func main() {
  nums1 := []int{1,3}
  nums2 := []int{2, 5, 7}
  fmt.Println(findMedianSortedArrays(nums1, nums2))
}
