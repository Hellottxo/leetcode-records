/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];
  for(let i = 1; i < prices.length; i++) {
      if(prices[i] > prices[i-1]) {
          min = Math.min(min, prices[i-1])
          profit = Math.max(profit, prices[i] - min);
      }
  }
  return profit;
};