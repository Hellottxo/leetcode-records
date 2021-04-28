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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    const res = [];
    let queue = [root];
    res.push([root.val]);
    while(queue.length) {
        const child = [];
        const node = [];
        for(let i = 0; i < queue.length; i++) {
            const left = queue[i].left;
            const right = queue[i].right;
            if (left) {
                child.push(left);
                node.push(left.val);
            }
            if (right) {
                child.push(right);
                node.push(right.val);
            }
        }
        if(node.length) res.push(node);
        queue = child;
    }
    return res;
};