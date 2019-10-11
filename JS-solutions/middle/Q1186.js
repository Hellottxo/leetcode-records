/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function(arr) {
    let dp = new Array(arr.length)
    for(let i=0;i<arr.length;i++){
        dp[i] = [arr[0],0]
    }
    let maxNum = arr[0]
    for(let i=1;i<arr.length;i++){
        dp[i][0] = Math.max(dp[i-1][0]+arr[i],arr[i])
        dp[i][1] = Math.max(dp[i-1][0],dp[i-1][1]+arr[i])

        maxNum = Math.max(dp[i][0],dp[i][1],maxNum)
    }

    return maxNum
};

console.log(maximumSum([1,-2,0,3]))
console.log(maximumSum([1,-2,-2,3]))
console.log(maximumSum([-1,-1,-1,-1]))