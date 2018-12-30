import "math"

func lengthOfLongestSubstring(s string) int {
    var max, i, j int
    n := len(s)
    for ;i < n && j < n; j++ {
        if strings.Contains(s[i:j], s[j:j+1]) {
            i += strings.Index(s[i:j], s[j:j+1]) + 1
        }
        max = int(math.Max(float64(j - i + 1), float64(max)))
    }
    return max
}
