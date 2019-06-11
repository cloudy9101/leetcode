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
  var head = new ListNode();
  var cur = head;
  var nullCount = 0;
  var min = 0;
  while(nullCount < lists.length) {
    for(var i = 0; i < lists.length; i++) {
      if(lists[min] === null || (lists[i] != null && lists[i].val < lists[min].val)) {
        min = i;
      }
    }
    if(lists[min] != null) {
      cur.next = new ListNode(lists[min].val);
      cur = cur.next;
      lists[min] = lists[min].next;
    }
    if(lists[min] === null) {
      nullCount++;
    }
  }
  return head.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// var arr = [
//   [1, 4, 5],
//   [1, 3, 4],
//   [2, 6]
// ]
var arr = [[]]

var lists = [];

for(var i = 0; i < arr.length; i++) {
  var l = new ListNode(arr[i][0]);
  lists.push(l);
  for(var j = 0; j < arr[i].length - 1; j++) {
    l.next = new ListNode(arr[i][j + 1]);
    l = l.next;
  }
}
console.log(lists);
console.log(mergeKLists(lists))
