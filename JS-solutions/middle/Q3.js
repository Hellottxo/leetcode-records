/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = nowLength = 0
    let charMap = {}
    for(let i=0;i<s.length;i++){
        if (charMap[s[i]] != undefined){
            i = charMap[s[i]]
            nowLength = 0
            charMap = {}
            continue
        }

        charMap[s[i]] = i
        nowLength ++
        if (nowLength > maxLength) {
            maxLength = nowLength
        }
    }

    return maxLength
};

console.log(lengthOfLongestSubstring("abcabcbb"))