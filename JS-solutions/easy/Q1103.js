/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let lastCandies = candies;
  let arr = new Array(num_people);
  arr.fill(0);
  let count = 0;
  while(lastCandies > 0) {
    for(let i = 0;i < num_people;i++) {
      if(lastCandies > (i + 1 + count * num_people)) {
        const base = i + 1 + count * num_people;
        arr[i] += base;
        lastCandies -= base;
      }else {
        arr[i] += lastCandies;
        lastCandies = 0;
      }
    }
    count++;
  }
    
  return arr;
};