/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var res = [];
  backtrack(res, "", 0, 0, n);
  return res;
}

var backtrack = function(ans, cur, open, close, max) {
  if(cur.length === max * 2) {
    ans.push(cur);
    return;
  }
  if(open < max) {
    backtrack(ans, cur + "(", open + 1, close, max);
  }

  if(close < open) {
    backtrack(ans, cur + ")", open, close + 1, max);
  }
}
