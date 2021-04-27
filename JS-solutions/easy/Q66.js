/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits[0] === 0) return [1];
    let len = digits.length - 1;
    let remain = 1;
    while(len > -1) {
        let value = digits[len] + remain;
        remain = value > 9 ? 1 : 0;
        value = value % 10;
        digits[len] = value;
        if(len === 0 && remain === 1) digits.unshift(1);
        len --;
    }
    return digits
};
