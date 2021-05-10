/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2, remain = 0) {
    if (!l1 && !l2 && !remain) return null;
    const sum = (l1?.val || 0) + (l2?.val || 0) + remain;
    const nextL1 = parseInt(sum > 9 ? sum - 10 : sum);
    const r = sum > 9 ? 1 : 0;
    const nextL2 = !l1?.next && !l2?.next && r ? new ListNode(1, null) : addTwoNumbers(l1?.next, l2?.next, r);
    return new ListNode(nextL1, nextL2);
};