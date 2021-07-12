/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var dfs = function (level, nums, res, total) {
   if (level >= nums.length) {
      total.push(res)
      return;
   }

   const s = nums[level]
   dfs(level + 1, nums, [...res, s], total)
   dfs(level + 1, nums, [...res], total)
}

var subsets = function(nums) {
   const total = []
   dfs(level = 0, nums, res = [], total)
   return total
};
// @lc code=end

