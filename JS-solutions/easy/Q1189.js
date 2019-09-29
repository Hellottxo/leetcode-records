/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return "";
  let flag = strs[0]
  for(let i = 0; i < strs.length; i++) {
      while(strs[i].indexOf(flag) != 0) {
          flag = flag.slice(0, -1);
          if(!flag) return "";
      }
  }
  return flag;
};