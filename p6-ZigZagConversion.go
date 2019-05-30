package main

import "fmt"

func convert(s string, numRows int) string {
  if numRows == 1 {
    return s
  }
  bytes := make([]byte, len(s))
  index := 0
  cycleLen := numRows * 2 - 2
  for i := 0; i < numRows; i++ {
    for j := 0; j + i < len(s); j = j + cycleLen {
      bytes[index] = s[i + j]
      index++
      if (i != 0 && i != numRows - 1 && j + cycleLen - i < len(s)) {
        bytes[index] = s[j + cycleLen - i]
        index++
      }
    }
  }
  return string(bytes)
}

func main() {
  s := "PAYPALISHIRING"
  numRows := 4
  fmt.Println(convert(s, numRows))
}
