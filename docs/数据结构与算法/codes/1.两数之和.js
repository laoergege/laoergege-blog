/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const tmp = {}
  for (const [i, a] of nums.entries()) {
    let b = target - a
    if (b in tmp) {
      return [tmp[b], i]
    } else {
      tmp[a] = i
    }
  }
};
// @lc code=end

