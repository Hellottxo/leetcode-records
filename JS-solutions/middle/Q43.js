// 43. 字符串相乘
// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 示例 1:

// 输入: num1 = "2", num2 = "3"
// 输出: "6"
// 示例 2:

// 输入: num1 = "123", num2 = "456"
// 输出: "56088"
// 说明：

// num1 和 num2 的长度小于110。
// num1 和 num2 只包含数字 0-9。
// num1 和 num2 均不以零开头，除非是数字 0 本身。
// 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
// https://leetcode-cn.com/problems/multiply-strings/
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let rs = ""

    // 只算1位的
    if(num2.length <= 1){
        let addition = 0;
        for(let i = num1.length-1;i>= 0;i--){
            let temp = Number(num1[i])*Number(num2)
            temp += addition
            rs += String((temp % 10))
            addition = ~~(temp / 10)
        }
        if(addition > 0){
            rs += addition
        }

        return prefixFormat(rs.split("").reverse().join(""))
    }

    for(let i=num2.length - 1;i>=0;i--){
        rs = bigIntAdd(multiply(num1,num2[i])+"0".repeat(num2.length - i-1),rs)
    }
    
    return prefixFormat(rs)
};

// bigIntAdd 大数加法
function bigIntAdd(num1,num2){
    let rs = ""
    let maxLength = num1.length > num2.length ? num1.length : num2.length

    // 补齐
    if(num1.length < maxLength){
        num1 = "0".repeat(maxLength - num1.length) + num1
    }
    if(num2.length < maxLength){
        num2 = "0".repeat(maxLength - num2.length) + num2
    }

    let addition = 0;
    for(let i = maxLength-1;i>= 0;i--){
        let temp = Number(num1[i])+Number(num2[i])
        temp += addition
        rs += String((temp % 10))
        addition = ~~(temp / 10)
    }
    if(addition > 0){
        rs += addition
    }

    return rs.split("").reverse().join("")
}

function prefixFormat(rs){
    let i=0;
    for(;i<rs.length;i++){
        if(rs[i] != "0"){
            break
        }
    }
    rs = rs.slice(i)
    if(rs == ""){
        rs = "0"
    }

    return rs
}

let util = require("../util/common")

util.assert(bigIntAdd("12","3222"),"3234")

util.assert(multiply("2","3"),"6")
util.assert(multiply("123","456"),"56088")
util.assert(multiply("9","99"),"891")
util.assert(multiply("9133","0"),"0")