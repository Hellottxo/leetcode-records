/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let map = {}
  let flag = false;
  nums.forEach((e, i) => {
      if(map[e] === undefined) {
          map[e] = i;
          return;
      }
      if(i - map[e] <= k) {
          flag = true;
      }else {
          map[e] = i;
      }
  })
  return flag;
};