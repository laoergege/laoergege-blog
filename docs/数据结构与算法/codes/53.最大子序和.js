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
    const dp = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + nums[i];
        } else {
            dp[i] = nums[i];
        }
        // dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }

    return Math.max(...dp)
};
// @lc code=end

