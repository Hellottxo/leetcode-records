/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) return [];
    const res = [];
    res.push(root.val);
    if (root.left) res.unshift(...inorderTraversal(root.left));
    if (root.right) res.push(...inorderTraversal(root.right));
    return res;
};