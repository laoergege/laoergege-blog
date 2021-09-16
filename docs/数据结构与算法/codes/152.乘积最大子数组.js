/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    const minDp = [nums[0]]
    const maxDp = [nums[0]]
    let max = 0
    for (let i = 1; i < nums.length; i++) {
        maxDp[i] = Math.max((nums[i] > 0 ? maxDp[i - 1] : minDp[i - 1]) * nums[i], nums[i])
        minDp[i] = Math.min(minDp[i - 1] * nums[i], nums[i])
        max = Math.max(maxDp[i], minDp[i])
    }

    return max
};
// @lc code=end

