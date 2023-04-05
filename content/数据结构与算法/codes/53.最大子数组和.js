/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    return dfs(nums, 0, 0)
};

function dfs(nums, i, max) {
    if (i === nums.length) {
        return max
    }

    max += nums[i]

    return Math.max(
        max,
        dfs(nums, i + 1, max),
        dfs(nums, i + 1, 0)
    )
}
// @lc code=end

