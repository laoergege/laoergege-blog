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
    const temp = [...new Array(6)].map(e => [])
    return dfs(nums, temp, 0, nums.length - 1)
};

function dfs(nums, temp, left, right) {
    let _right = right - 1

    return temp[left][right] ??= Math.max(
        ...nums.slice(left, _right)
            .map((e, idx) => dfs(nums, idx, _right))
    ) + nums[right]
}
// @lc code=end

