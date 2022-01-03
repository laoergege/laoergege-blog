/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let zero;

    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];

        // 初始 zero 位置
        if (zero === undefined && num === 0) {
            zero = index
        } else if (zero !== undefined && num !== 0) {
            [nums[index], nums[zero]] = [nums[zero], nums[index]]
            zero++
        }
    }

    return nums
};
// @lc code=end

