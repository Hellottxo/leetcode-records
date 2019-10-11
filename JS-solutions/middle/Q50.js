/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(n === 0) return 0;
  if(n === 1) return x;
  if(n === -1) return 1/x;
  const main = myPow(x, parseInt(n/2));
  const other = myPow(x, n%2);
  return main * main * other ;
};