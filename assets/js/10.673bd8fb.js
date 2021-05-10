(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{403:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_1103-分糖果-ii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1103-分糖果-ii"}},[t._v("#")]),t._v(" 1103. 分糖果 II")]),t._v(" "),a("h2",{attrs:{id:"question"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#question"}},[t._v("#")]),t._v(" Question")]),t._v(" "),a("p",[t._v("排排坐，分糖果。")]),t._v(" "),a("p",[t._v("我们买了一些糖果 "),a("code",[t._v("candies")]),t._v("，打算把它们分给排好队的 "),a("strong",[a("code",[t._v("n = num_people")])]),t._v(" 个小朋友。")]),t._v(" "),a("p",[t._v("给第一个小朋友 1 颗糖果，第二个小朋友 2 颗，依此类推，直到给最后一个小朋友 "),a("code",[t._v("n")]),t._v(" 颗糖果。")]),t._v(" "),a("p",[t._v("然后，我们再回到队伍的起点，给第一个小朋友 "),a("code",[t._v("n + 1")]),t._v(" 颗糖果，第二个小朋友 "),a("code",[t._v("n + 2")]),t._v(" 颗，依此类推，直到给最后一个小朋友 "),a("code",[t._v("2 * n")]),t._v(" 颗糖果。")]),t._v(" "),a("p",[t._v("重复上述过程（每次都比上一次多给出一颗糖果，当到达队伍终点后再次从队伍起点开始），直到我们分完所有的糖果。注意，就算我们手中的剩下糖果数不够（不比前一次发出的糖果多），这些糖果也会全部发给当前的小朋友。")]),t._v(" "),a("p",[t._v("返回一个长度为 "),a("code",[t._v("num_people")]),t._v("、元素之和为 "),a("code",[t._v("candies")]),t._v(" 的数组，以表示糖果的最终分发情况（即 "),a("code",[t._v("ans[i]")]),t._v(" 表示第 "),a("code",[t._v("i")]),t._v(" 个小朋友分到的糖果数）。")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("strong",[t._v("示例 1：")])]),t._v(" "),a("pre",[a("strong",[t._v("输入：")]),t._v("candies = 7, num_people = 4\n"),a("strong",[t._v("输出：")]),t._v("[1,2,3,1]\n"),a("strong",[t._v("解释：")]),t._v("\n第一次，ans[0] += 1，数组变为 [1,0,0,0]。\n第二次，ans[1] += 2，数组变为 [1,2,0,0]。\n第三次，ans[2] += 3，数组变为 [1,2,3,0]。\n第四次，ans[3] += 1（因为此时只剩下 1 颗糖果），最终数组变为 [1,2,3,1]。\n")]),t._v(" "),a("p",[a("strong",[t._v("示例 2：")])]),t._v(" "),a("pre",[a("strong",[t._v("输入：")]),t._v("candies = 10, num_people = 3\n"),a("strong",[t._v("输出：")]),t._v("[5,2,3]\n"),a("strong",[t._v("解释：")]),t._v("\n第一次，ans[0] += 1，数组变为 [1,0,0]。\n第二次，ans[1] += 2，数组变为 [1,2,0]。\n第三次，ans[2] += 3，数组变为 [1,2,3]。\n第四次，ans[0] += 4，最终数组变为 [5,2,3]。\n")]),t._v(" "),a("p",[t._v(" ")]),t._v(" "),a("p",[a("strong",[t._v("提示：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1 <= candies <= 10^9")])]),t._v(" "),a("li",[a("code",[t._v("1 <= num_people <= 1000")])])]),t._v(" "),a("h2",{attrs:{id:"answer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#answer"}},[t._v("#")]),t._v(" Answer")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number} candies\n * @param {number} num_people\n * @return {number[]}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("distributeCandies")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("candies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num_people")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" lastCandies "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" candies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num_people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastCandies "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" num_people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lastCandies "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" num_people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" base "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" num_people"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        lastCandies "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" lastCandies"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        lastCandies "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);