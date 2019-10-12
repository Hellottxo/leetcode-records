/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    let s1Arr = s1.split(""),s2Arr = s2.split("")
    let s1Map = {}
    // 检查是否缺少字母
    for(let i=0;i<s2Arr.length;i++){
        let notContains = true
        for(let j=0;j<s1Arr.length;j++){
            if (s2Arr[i] == s1Arr[j]){
                notContains = false
                break
            }
        }
        if (notContains){
            return 0
        }
    }
    // 生成下一个最近字符位置map
    for(let i=0;i<s1Arr.length;i++){
        for(let j=1;j<s1Arr.length+1;j++){
            if (s1Map[i] == undefined) {
                s1Map[i] = {}
            }
            if (s1Map[i][s1Arr[(i+j)%s1Arr.length]] == undefined) {
                s1Map[i][s1Arr[(i+j)%s1Arr.length]] = (i+j)%s1Arr.length
            }
        }
    }

    let s1Round = 0,s2Round = 0,i1 = 0,i2 = 0
    if(s1Arr[0] != s2Arr[0]){
        i1 = s1Map[i1][s2Arr[i2]]
    }
    i2++
    if(i2 >= s2Arr.length) {
        i2 = 0
        s2Round ++
    }
    while(true){
        let nextI1 = s1Map[i1][s2Arr[i2]]
        if(nextI1 <= i1){
            s1Round ++
            if(s1Round >= n1){
                break
            }
        }
        i1 = nextI1
        i2 ++
        if(i2 >= s2Arr.length) {
            i2 = 0
            s2Round ++
        }
    }

    return Math.floor(s2Round/n2)
};

// console.log(getMaxRepetitions("acb",4,"ab",2))
// console.log(getMaxRepetitions("aaa",3,"aa",1))
// console.log(getMaxRepetitions("bacaba",3,"abacab",1))
// console.log(getMaxRepetitions("musicforever",10,"lovelive",100000))
// console.log(getMaxRepetitions("phqghumeay",100,"lnl",1))
// console.log(getMaxRepetitions("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",1000000,"a",1000000))
// console.log(getMaxRepetitions("acb",1,"acb",1))
console.log(getMaxRepetitions("lovelivenanjomusicforever",100000,"nanjo",10))