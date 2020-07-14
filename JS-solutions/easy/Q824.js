
// 我们要将句子转换为 “Goat Latin”（一种类似于 猪拉丁文 - Pig Latin 的虚构语言）。

// 山羊拉丁文的规则如下：

// 如果单词以元音开头（a, e, i, o, u），在单词后添加"ma"。
// 例如，单词"apple"变为"applema"。

// 如果单词以辅音字母开头（即非元音字母），移除第一个字符并将它放到末尾，之后再添加"ma"。
// 例如，单词"goat"变为"oatgma"。

// 根据单词在句子中的索引，在单词最后添加与索引相同数量的字母'a'，索引从1开始。
// 例如，在第一个单词后添加"a"，在第二个单词后添加"aa"，以此类推。
// 返回将 S 转换为山羊拉丁文后的句子。

// 输入: "I speak Goat Latin"
// 输出: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

// 输入: "The quick brown fox jumped over the lazy dog"
// 输出: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/goat-latin
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let rs = []
    let wordList = S.split(" ")
    for(let i in wordList){
        rs.push(toGoatLatinWord(wordList[i],i))
    }
    return rs.join(" ")
};

var toGoatLatinWord = function(word,index){
    let rs = ""
    if(['a', 'e', 'i', 'o', 'u'].includes(word[0].toLowerCase())){
        rs = `${word}ma`
    }else{
        rs = `${word.slice(1)}${word[0]}ma`
    }

    return rs + "a".repeat(Number(index)+1)
}

let util = require("../util/common")

util.assert(toGoatLatin("I speak Goat Latin"),"Imaa peaksmaaa oatGmaaaa atinLmaaaaa")
util.assert(toGoatLatin("The quick brown fox jumped over the lazy dog"),"heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa")