/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if (!matrix.length) return false;
    const crossLen = matrix.length - 1;
    const mainLen = matrix[0].length - 1;
    if (target < matrix[0][0] || target > matrix[crossLen][mainLen]) return false;
    let [main, cross] = [0, crossLen];
    while(main <= mainLen && cross > -1 ) {
        const data = matrix[cross][main];
        if (data > target) cross--;
        if (data < target) main ++;
        if (data === target) return true;
    }
    return false;
};