/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    if (!head) return [];
    const rs = [head.val];
    head = head.next;
    while(head) {
        rs.unshift(head.val);
        head = head.next;
    };
    return rs;
};