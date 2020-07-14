/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    let obj = iMaxDiff(root)
    return obj.nowMax.maxVal - obj.nowMax.minVal
};

function getTmpObj(val,obj){
    if(obj == null){
        return {"maxVal":val,"minVal":val,"nowMax":{"maxVal":val,"minVal":val}}
    }

    let rs = {}
    if(val > obj.maxVal){
        rs = {"maxVal":val,"minVal":obj.minVal,"nowMax":{"maxVal":val,"minVal":obj.minVal}}
    }else if(val < obj.minVal){
        rs = {"maxVal":obj.maxVal,"minVal":val,"nowMax":{"maxVal":obj.maxVal,"minVal":val}}
    }else{
        rs = {"maxVal":obj.maxVal,"minVal":obj.minVal}
        let nowMax = {}
        if (val - obj.minVal >= obj.maxVal - val){
            nowMax = {"maxVal":val,"minVal":obj.minVal}
        }else{
            nowMax = {"maxVal":obj.maxVal,"minVal":val}
        }

        if(nowMax.maxVal - nowMax.minVal > obj.nowMax.maxVal - obj.nowMax.minVal){
            rs.nowMax = nowMax
        }else{
            rs.nowMax = obj.nowMax
        }
    }

    return rs
}

var iMaxDiff = function(node){
    if(node == null){
        return null
    }

    let LMax = iMaxDiff(node.left), RMax = iMaxDiff(node.right), Max = undefined
    let LTmpObj = getTmpObj(node.val,LMax)
    let RTmpObj = getTmpObj(node.val,RMax)
    Max = LTmpObj.nowMax.maxVal - LTmpObj.nowMax.minVal > RTmpObj.nowMax.maxVal - RTmpObj.nowMax.minVal ? LTmpObj : RTmpObj
    let sArr = [LTmpObj.minVal,LTmpObj.maxVal,RTmpObj.minVal,RTmpObj.maxVal].sort((a,b)=>a-b)
    return {"maxVal":sArr[3],"minVal":sArr[0],"nowMax":{"maxVal":Max.nowMax.maxVal,"minVal":Max.nowMax.minVal}}
}

function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

// function getTree(arr,i){
//     if(arr[i] == null || i >= arr.length) return null
    
//     let rs = new TreeNode(arr[i])
//     rs.left = getTree(arr,(i+1)*2-1)
//     rs.right = getTree(arr,(i+1)*2)

//     return rs
// }

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

let tt = getTree([8,6,9,11,4,null,0,null,2,null,3,null,null,10,5,null,null,null,null,null,7,null,1])

// let input = getTree([8,3,10,1,6,null,14,null,null,4,7,13],0)
// let rs = maxAncestorDiff(input)
// if(rs != 7){
//     console.log("拉稀",rs)
// }

// if(maxAncestorDiff(getTree([0,null,1],0)) != 1){
//     console.log("laxi")
// }


// if(maxAncestorDiff(getTree([2,4,3,1,null,0,5,null,6,null,null,null,null,null,7],0)) != 5){
//     console.log("laxi")
// }

// if(maxAncestorDiff(getTree([1,null,2,null,null,null,0,null,null,null,null,null,null,3],0)) != 3){
//     console.log("laxi")
// }

// [8,6,9,11,4,null,0,null,2,null,3,null,null,10,5,null,null,null,null,null,7,null,1]
if(maxAncestorDiff(getTree([8,6,9,11,4,null,0,null,2,null,3,null,null,10,5,null,null,null,null,null,7,null,1],0)) != 10){
    console.log("laxi")
}
