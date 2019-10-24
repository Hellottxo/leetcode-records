/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length - 1;
  reverse(nums, 0, len);
  reverse(nums, 0, k-1);
  reverse(nums, len-k, len);
};

var reverse = function(nums, start, end) {
  while(start < end) {
    const tmp = nums[start];
    nums[start++] = nums[end];
    nums[end--] = tmp;
  }
}