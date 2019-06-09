/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var dummy = new ListNode(0);
  dummy.next = head;
  var first = dummy;
  var length = 0;
  while(first.next != null) {
    length++;
    first = first.next;
  }
  length -= n;
  first = dummy;
  for(length >= 0; length--;) {
    first = first.next;
  }
  first.next = first.next.next;
  return dummy.next;
};
