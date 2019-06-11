/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
  while(lists.length > 1) {
    for(var i = 0; i < lists.length - 1; i += 2) {
      lists.splice(i, 2, mergeTwoLists(lists[i], lists[i + 1]));
    }
  }
  return lists.length > 0 ? lists[0] : null;
};

var mergeTwoLists = function(l1, l2) {
  let res = new ListNode();
  let cur = res;
  while(l1 && l2){
    if(l1.val <= l2.val){
      cur.next = new ListNode(l1.val);
      l1 = l1.next;
      cur = cur.next;
    }
    else {
      cur.next = new ListNode(l2.val);
      l2 = l2.next;
      cur = cur.next;
    }
  }
  cur.next = l1 || l2;
  return res.next;
};
