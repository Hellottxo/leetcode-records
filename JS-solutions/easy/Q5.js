
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

// 示例 1：

// 输入：s = "We are happy."
// 输出："We%20are%20happy."
 

// 限制：

// 0 <= s 的长度 <= 10000

// https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let rs = ""
    for(let i in s){
        if(s[i] != " "){
            rs += s[i]
        }else{
            rs += "%20"
        }
    }

    return rs;
};

let util = require("../util/common")

util.assert(replaceSpace("We are happy."),"We%20are%20happy.")
