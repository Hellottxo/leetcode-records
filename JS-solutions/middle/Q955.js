/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let delCol = 0
    let rs = []
    for (let j=0;j< A[0].length;j++){
        let ok = true
        let needCheckNextCol = false
        for(let i=0;i<A.length-1;i++){
            if (rs.length!=0) {
                if (rs[i] + A[i][j] > rs[i+1] + A[i+1][j]){
                    ok = false
                    break
                }
                if (rs[i] + A[i][j] == rs[i+1] + A[i+1][j]) {
                    needCheckNextCol = true
                }
            }else{
                if (A[i][j] > A[i+1][j]){
                    ok = false
                    break
                }
                if (A[i][j] == A[i+1][j]) {
                    needCheckNextCol = true
                }
            }
            
        }    
        if (!ok) {
            delCol++
        }else{
            if (needCheckNextCol) {
                for(let i=0;i<A.length;i++){
                    if (!rs[i]) rs[i] = ""
                    rs[i] += A[i][j]
                }
                continue
            }
            break
        }
    }
    return delCol
};

console.log(minDeletionSize(["xga","xfb","yfa"]))