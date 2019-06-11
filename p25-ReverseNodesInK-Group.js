/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if(head === null || head.next === null) { return head; }
  var cur = head;
  var previous = new ListNode();
  var point = previous;
  var rest = null;
  while(cur != null) {
    var ccur = cur;
    for(var i = 0; i < k; i++) {
      if(ccur.next === null) {
        return point.next;
      }
      ccur = ccur.next;
    }
    rest = ccur;
    for(var i = 0; i < k; i++) {
      var lastMinOne = cur;
      for(var j = 0; j < k - i - 1; j++) {
        lastMinOne = lastMinOne.next;
      }
      var last = lastMinOne.next;
      last.next = lastMinOne;
      if(i === 0) {
        previous.next = last;
        previous = lastMinOne;
      }
      if(i === k) {
        lastMinOne.next = rest;
      }
    }
    cur = rest;
  }
  return point.next;
};
