/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, mem = {}) {
  if (n === 1 || n === 2) return n;

  return mem[n] || (mem[n] = climbStairs(n - 1, mem) + climbStairs(n - 2, mem));
};
// @lc code=end
