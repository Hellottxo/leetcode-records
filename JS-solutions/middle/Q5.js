/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let sList = s.split("")
    let max = {
        "start":0,
        "end":0,
        "num":0
    }
    let charMapList = []
    //构造缓存数组
    for(let i=0;i<sList.length;i++){
        if(!charMapList[sList[i]]) {
            charMapList[sList[i]] = [i]
        }else{
            charMapList[sList[i]].push(i)
        }
    }
    for(let i=0;i<s.length;i++){
        let cache = charMapList[s[i]].slice(0)
        for(let j=cache.pop();j>=i+max.num;j=cache.pop()){
            if(isBack(i,j,sList)){
                if (max.num < j-i) {
                    max.start = i
                    max.end = j
                    max.num = j-i
                }
            }
        }
    }

    return sList.slice(max.start,max.end+1).join("")
};

var isBack = function(start,end,s) {
    for(let i=0;i<(end-start)/2;i++){
        if (s[start+i] != s[end-i]) {
            return false
        }
    }

    return true
}

// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"))

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function(s) {
    let sList = s.split("")

    let max = {
        "start":0,
        "end":0,
        "num":0
    }
    let dp = new Array(s.length).fill(1)
    for(let i=s.length-2;i>=0;i--){
        for(let j=s.length - 1;j>= i;j--){
            if (s[i] == s[j] && dp[j-1] != 0){
                dp[j] = j-i+1
            }else{
                dp[j] = 0
            }
            if (dp[j] > max.num){
                max.num = dp[j]
                max.start = i
                max.end = j
            }
        }
    }

    return sList.slice(max.start,max.end+1).join("")
};

// console.log(longestPalindrome2("babad"))
// console.log(longestPalindrome2("cbbd"))
console.log(longestPalindrome2("aaaa"))