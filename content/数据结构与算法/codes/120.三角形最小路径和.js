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
  const temp = []
  
  for (const [i, arr] of triangle.entries()) {
    let cur = temp[i] ??= []
    for (const j of arr.keys()) {
      let result = Math.min(temp[i - 1]?.[j] ?? Infinity, temp[i - 1]?.[j - 1] ?? Infinity)
      cur.push(arr[j] + (result !== Infinity ? result : 0))
    }
  }

  return Math.min.apply(null, temp[temp.length - 1])
};

// @lc code=end