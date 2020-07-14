function assert(a,b){
    if(a != b){
        console.log(`ERROR: ${a} != ${b}`)
        return
    }

    console.log(`INFO: ${a} == ${b} assert ok`)
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function getTree(arr){
let root = new TreeNode(arr.shift())
let stack = [root]
while(arr.length > 0){
    let node = stack.shift()
    let l = arr.shift()
    let r = arr.shift()
    if(l != null){
        node.left = new TreeNode(l)
        stack.push(node.left)
    }else{
        node.left = null
    }

    if(r != null){
        node.right = new TreeNode(r)
        stack.push(node.right)
    }else{
        node.right = null
    }
}

return root
}

module.exports = {
    assert,getTree
}