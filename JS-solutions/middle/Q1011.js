/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
    let sum = 0;
    let max = 0;
    for (let i = 0; i < weights.length; i += 1) {
        if (weights[i] > max) max = weights[i];
        sum += weights[i];
    }
    let min = Math.max(max, parseInt(sum / weights.length));
    max = sum;
    while (min < max) {
        let mid = parseInt((min + max) / 2);
        if (isSuccess(weights, mid, D)) {
            max = mid;
        } else {
            min = mid + 1;
        }
    }
    return min;
};

const isSuccess = (weights, min, D) => {
    let day = D;
    let remain = min;
    for (let i = 0; i < weights.length; i += 1) {
        if (remain - weights[i] < 0) {
            remain = min;
            day = day - 1;
        }
        remain -= weights[i];
    }
    return day > 0
}