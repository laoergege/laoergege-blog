/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const temp = [...triangle[0]]
  let idx = 0

  
  return temp.at(-1)
};
// @lc code=end

/**
 * f(i，j) = max[f(i - 1, j), f(i-1, j-1)] + t[i, j]
 */