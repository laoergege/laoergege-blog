/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  return dp(s, 0, s.length - 1);
};

function dp(s, l, r) {
  if (l === r) {
    return 1;
  }

  if (s[l] !== s[r]) {
    return Math.max(dp(s, l + 1, r), dp(s, l, r - 1));
  } else {
    return dp(s, l + 1, r - 1) + 2;
  }
}

// @lc code=end
