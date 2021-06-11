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
var dfs = function (nums, res, level = 0, arr) {
   if(level === nums.length - 1) {
      res.push(arr)
   }
   dfs(nums, res, level + 1, arr.concat())
   dfs(nums, res, level + 1, arr.concat(nums[level]))
}

var subsets = function(nums) {
    const res = []
    dfs(nums, res, nums, [])
    return res
};
// @lc code=end

