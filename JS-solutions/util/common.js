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

// 字典树
var getTrie = function(words){
    let root = new TrieNode("#",false)
    for(let word of words){
        root.add(word)
    }

    return root
}

var TrieNode = function(val,isEnd){
    this.val = val
    this.isEnd = isEnd
    this.childMap = {}
    this.size = 0
}

/**
 * @param {string} str
 */
TrieNode.prototype.add = function(str){
    if(str.length == 0) return
    let child = this.childMap[str[0]]
    if(!child){
        child = new TrieNode(str[0],0)
        this.childMap[str[0]] = child
    }

    if(str.length == 1) child.isEnd++
    child.add(str.slice(1))
}

module.exports = {
    assert,getTree
}