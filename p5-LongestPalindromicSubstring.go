package main

import "fmt"

func longestPalindrome(s string) string {
  var longestSubstr string
  var max int
  for i := 0; i < len(s); i++ {
    for j := len(s); j > i + max; j-- {
      if palindrom(s[i:j]) && j - i > max {
        longestSubstr = s[i:j]
        max = j - i
      }
    }
  }
  return longestSubstr
}

func palindrom(s string) bool {
  half := len(s) / 2
  for i := 0; i < half; i++ {
    if s[i] != s[len(s) - 1 - i] {
      return false
    }
  }
  return true
}

func main() {
  input := "babad"
  fmt.Println(longestPalindrome(input))
}
