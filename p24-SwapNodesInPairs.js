/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(head.next === null) { return head; }
  var cur = head;
  var previous = new ListNode();
  var point = previous;
  while(cur != null && cur.next != null) {
    var rest = cur.next.next;
    previous.next = cur.next
    cur.next.next = cur;
    cur.next = rest;
    previous = cur;
    cur = rest;
  }
  return point.next;
};
