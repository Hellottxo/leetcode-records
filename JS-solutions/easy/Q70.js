/**
 * @param {number} n
 * @return {number}
 */
let cache = {};
var climbStairs = function(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 2;
    if(cache[n]) {
        return cache[n];
    }else {
        cache[n] = climbStairs(n-1) + climbStairs(n-2);
        return cache[n];
    }
};