package main

import "fmt"
import "math"

func longestPalindrome(s string) string {
  if len(s) <= 0 {
    return ""
  }
  var start, end int
  for i := 0; i < len(s); i++ {
    length1 := expandCenter(s, i, i)
    length2 := expandCenter(s, i, i + 1)
    length := int(math.Max(float64(length1), float64(length2)))
    if length > end - start + 1 {
      start = i - (length - 1) / 2
      end = i + length / 2
    }
  }
  return s[start:(end + 1)]
}

func expandCenter(s string, left int, right int) int {
  for left >= 0 && right < len(s) && s[left] == s[right] {
    left--
    right++
  }
  return right - left - 1
}

func main() {
  input := ""
  fmt.Println(longestPalindrome(input))
}
