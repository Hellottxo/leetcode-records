/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let rs = []
    handle(root,rs)

    let newRoot = lastRoot = rs[0]
    for (let i=1;i<rs.length;i++){
        rs[i].left = rs[i].right = null
        lastRoot.left = null
        lastRoot.right = rs[i]
        lastRoot = rs[i]
    }
    return newRoot
};

var handle = function(node,rs) {
    if (node == null){
        return 
    }
    handle(node.left,rs)

    rs.push(node)

    handle(node.right,rs)
}
