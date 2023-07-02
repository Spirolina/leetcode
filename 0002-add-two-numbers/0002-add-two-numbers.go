/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	sum := 0
	var result ListNode
	var temp *ListNode
	addition := 0
	temp = &result
	for  {
		sum = 0

		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next
		}
		
		sum += addition
		temp.Val = sum%10
		addition = sum / 10
		if l2 == nil && l1 == nil && addition == 0 {
			break
		}
		temp.Next = &ListNode{}
		temp = temp.Next
		

	}
	return &result
}