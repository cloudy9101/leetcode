/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var records = {}
  for(var i = 0; i < 9; i++) {
    for(var j = 0; j < 9; j++) {
      if (board[i][j] != "." && records[board[i][j]] != null) {
        return false
      }
      records[board[i][j]] = true
    }
    records = {}
  }
  for(var i = 0; i < 9; i++) {
    for(var j = 0; j < 9; j++) {
      if (board[j][i] != "." && records[board[j][i]] != null) {
        return false
      }
      records[board[j][i]] = true
    }
    records = {}
  }
  for(var n = 0; n < 3; n++) {
    for(var m = 0; m < 3; m++) {
      for(var i = n * 3; i < n * 3 + 3; i++) {
        for(var j = m * 3; j < m * 3 + 3; j++) {
          if (board[i][j] != "." && records[board[i][j]] != null) {
            return false
          }
          records[board[i][j]] = true
        }
      }
      records = {}
    }
  }

  return true
};

var input1 = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

var input2 = [
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

console.log(isValidSudoku(input1))
console.log(isValidSudoku(input2))
