/**
 * js的数字都是用双精度浮点存的，所以其实没有64位，大概只有53位左右，所以这个函数不起作用
 * @param {string} L
 * @param {string} R
 * @return {number}
 */
var superpalindromesInRange = function(L, R) {
    let rs = [1,4,9,121,484,10201,12321,14641,40804,44944,1002001,1234321,4008004,100020001,102030201,104060401,121242121,123454321,125686521,400080004,404090404,10000200001,10221412201,12102420121,12345654321,40000800004,1000002000001,1002003002001,1004006004001,1020304030201,1022325232201,1024348434201,1210024200121,1212225222121,1214428244121,1232346432321,1234567654321,4000008000004,4004009004004,100000020000001,100220141022001,102012040210201,102234363432201,121000242000121,121242363242121,123212464212321,123456787654321,400000080000004]
    let l = Number(L),r = Number(R)
    let rsNum = 0
    for(let i=0;i<rs.length;i++){
        if(rs[i] > r) {
            break
        }
        if(rs[i] >= l) {
            rsNum ++
        }
    }

    return rsNum
};

// console.log(superpalindromesInRange("4","1000")) // 4
// console.log(superpalindromesInRange("38455498359","999999999999999999")) // 45

var helper = function(L,R) {
    let l = Number(L),r = Number(R)
    for (let i=l;i<=r;i++){
        if (i == r) {
            console.log("end: "+i)
        }
        if (isBack(i)) {
            console.log("i: " + i +" checkNum: "+i*i)
            if (isBack(i*i)){
                console.log(i*i)
            }
        }
    }
}

var isBack = function(num){
    let str = String(num)
    for(let i=0;i<str.length/2;i++){
        if (str[i] != str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

helper(1,1000000000)