/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  var dp = new Array(s.length + 1);
  for(var i = 0; i < dp.length; i++) {
    dp[i] = new Array(p.length + 1);
  }
  dp[s.length][p.length] = true;

  for(var i = s.length; i >= 0; i--) {
    for(var j = p.length - 1; j >= 0; j--) {
      var firstMatch = (i < s.length && (p.charAt(j) === s.charAt(i) || p.charAt(j) === "."));
      if(j + 1 < p.length && p.charAt(j + 1) === "*") {
        dp[i][j] = dp[i][j+2] || (firstMatch && dp[i+1][j]);
      } else {
        dp[i][j] = firstMatch && dp[i+1][j+1];
      }
    }
  }
  return dp[0][0] || false;
};

console.log(isMatch("aa", "a"));
console.log(isMatch("aa", "a*"));
console.log(isMatch("ab", ".*"));
console.log(isMatch("aab", "c*a*b"));
console.log(isMatch("mississippi", "mis*is*p*."));
