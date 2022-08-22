/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
     return dfs(nums, 0, -Infinity, 0)
};

// 回溯
// var lengthOfLIS = function (nums) {
//     return dfs(nums, 0, -Infinity, 0)
// };
// const temp = {}
// function dfs(nums, level, lastNum, result) {
//     if (level === nums.length) return result
//     if (temp[lastNum]) return temp[lastNum]

//     const target = nums[level]

//     const max = Math.max(
//         target > lastNum ? dfs(nums, level + 1, target, result + 1) : result,
//         dfs(nums, level + 1, lastNum, result)
//     )

//     return temp[lastNum] = max
// }
// @lc code=end

// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))