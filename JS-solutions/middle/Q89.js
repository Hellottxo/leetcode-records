/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if(n==0) return [0]
    let rs = [0]
    let existMap = {0:true}
    for(let i=0;i<n;i++){
        let last = rs[rs.length-1]
        let newNum = last ^ 1 << i
        if(!existMap[newNum]){
            existMap[newNum] = true
            rs.push(newNum)
            i=-1
        }
    }

    return rs
};

console.log(grayCode(3))