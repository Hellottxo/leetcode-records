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
var postorderTraversal = function(root) {
    if(!root) return [];
    const res = [];
    if (root.left) res.push(...postorderTraversal(root.left));
    if (root.right) res.push(...postorderTraversal(root.right));
    res.push(root.val);
    return res;
};
