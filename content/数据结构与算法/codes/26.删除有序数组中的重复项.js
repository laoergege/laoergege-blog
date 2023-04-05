/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0
    let right = 0

    while (right < nums.length) {
        right++
        if (nums[left] !== nums[right]) {
            nums.splice(left += 1, right - left)
            right = left
        }
    }

    return nums.length
};
// @lc code=end

