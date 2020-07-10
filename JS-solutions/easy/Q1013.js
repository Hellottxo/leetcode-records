/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  if (A.length < 3) return false;
  let sum = A.reduce((ac, cu) => ac + cu);
  if (sum % 3 !== 0) return false;
  const average = sum / 3;
  let accumulate = 0;
  let count = 3;
  for (let i = 0; i < A.length; i += 1) {
      accumulate += A[i];
      if (accumulate === average) {
          accumulate = 0;
          count -= 1;
      }
  }
  return count === 0 || (average === 0 && count <= 0);
};