/**
 * @param {string} s
 * @return {string}
 */
// 解法1: dp
var longestPalindrome = function (s) {
  let res = "";
  const n = s.length;
  // 构造缓存数组，dp[i][j]代表字符串下标i-j是否为回文字符串
  const dp = Array.from(Array(n), () => Array(n).fill(false));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      // 首尾相等且子串为回文字符串，则代表当前字符串为回文字符串
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};

// 解法2: 双指针/中心扩散
var longestPalindrome = function (s) {
  let res = "";
  const n = s.length;
  for ( let i = 0; i < n; i++) {
    // 无法判断回文字符串为奇数或偶数，因此针对奇偶分别执行一次
    getLongest(i, i);
    getLongest(i, i + 1);
  }

  function getLongest(left, right) {
    // 以当前下标向外扩散
    while(s[left] === s[right] && left >=0 && right <= n - 1) {
        left--;
        right++;
    }
    // 因为满足条件后，继续执行left--与right++才退出循环
    // 因此实际满足条件的回文字符串下标为 i = left + 1; j = right - 1
    if (right - 1 - left > res.length) {
        res = s.substring(left + 1, right);
    }
  }

  return res;
};

// 马拉车算法