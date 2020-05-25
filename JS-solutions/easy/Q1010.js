/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = function (time) {
  let count = 0;
  const remain = Array.from({length: 60}, () => 0);
  for (let i = 0; i < time.length; i += 1) {
      remain[time[i] % 60] += 1;
  }
  for (let i = 1; i < 30; i += 1) {
      count += remain[i] * remain[60 - i];
  }
  count += getFactorial(remain[0]) + getFactorial(remain[30]);
  return count;
};

const getFactorial = (num) => num * (num - 1) / 2;