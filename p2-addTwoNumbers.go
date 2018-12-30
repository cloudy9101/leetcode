/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    return sumNode(l1, l2, &ListNode{Val: 0})
}

func sumNode(l1 *ListNode, l2 *ListNode, pl *ListNode) *ListNode {
    nl := &ListNode{Val: l1.Val + l2.Val}
    pl.Next = nl
    if pl.Val >= 10 {
        pl.Val = pl.Val - 10
        nl.Val = nl.Val + 1
    }
    l1, l2 = l1.Next, l2.Next
    if l1 != nil && l2 != nil {
        sumNode(l1, l2, nl)
    } else if l1 != nil {
        sumNode(l1, &ListNode{Val: 0}, nl)
    } else if l2 != nil {
        sumNode(&ListNode{Val: 0}, l2, nl)
    } else if nl.Val >= 10 {
        nl.Val = nl.Val - 10
        nl.Next = &ListNode{Val: 1}
    }
    return nl
}
