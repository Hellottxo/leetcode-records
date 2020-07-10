/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const map = {};
  nums.forEach(e => {
    if(!map[e]) {
      map[e] = e;
    }
  })
  return Object.keys(map).length != nums.length;
};