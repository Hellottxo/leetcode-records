/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let tmp = nums[0];
  for(let i = 1; i < nums.length; i++) {
      tmp = tmp ^ nums[i];
  }
  return tmp;
};