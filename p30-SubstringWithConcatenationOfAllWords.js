/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if(!s || words.length === 0) { return []; }
  var wordHash = {};
  for(var i = 0; i < words.length; i++) {
    if(wordHash[words[i]] === undefined) {
      wordHash[words[i]] = 1;
    } else {
      wordHash[words[i]] += 1;
    }
  }
  var res = [];
  var wlen = words[0].length;
  var fixedPointer = 0, movedPointer = 0;
  while(fixedPointer < s.length - wlen) {
    var newWordHash = {};
    movedPointer = fixedPointer;
    while(movedPointer <= s.length - wlen) {
      if(wordHash[s.slice(movedPointer, movedPointer + wlen)] != undefined) {
        newWordHash[s.slice(movedPointer, movedPointer + wlen)] = (newWordHash[s.slice(movedPointer, movedPointer + wlen)] || 0) + 1;
        movedPointer += wlen;
      } else {
        break;
      }
      if((movedPointer - fixedPointer) > (wlen * words.length - 1)) {
        break;
      }
    }
    var finded = true;
    for (var word in wordHash) {
      if(newWordHash[word] != wordHash[word]) {
        finded = false;
      }
    }
    if(finded) { res.push(fixedPointer) }
    fixedPointer++;
  }
  return res;
};

console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"]))
