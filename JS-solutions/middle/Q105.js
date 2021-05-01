/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null;
    const root = preorder.shift();
    const index = inorder.indexOf(root);
    const leftInorder = inorder.slice(0, index);
    const rightInorder = inorder.slice(index + 1);
    const rs = new TreeNode(root);
    rs.left = buildTree(preorder.slice(0, leftInorder.length),leftInorder);
    rs.right = buildTree(preorder.slice(leftInorder.length),rightInorder);
    return rs;
};