/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if(nums.length <=2) {
        return nums.join("/")
    }

    let inStr = nums.slice(1,nums.length).join("/")
    return `${nums[0]}/(${inStr})` 
};

console.log(optimalDivision([10,2,2]))