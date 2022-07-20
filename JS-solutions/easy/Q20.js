/**
 * @param {string} s
 * @return {boolean}
 */
const MAP = {
  "(": ")",
  "{": "}",
  "[": "]",
};
var isValid = function (s) {
  if (s % 2 !== 0) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (MAP[s[i]]) {
      stack.push(s[i]);
    } else {
      if (MAP[s[i]] === stack[stack.length - 1]) stack.pop();
      else return false;
    }
  }
  return stack.length > 0;
};
