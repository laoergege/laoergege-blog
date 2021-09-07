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
    const t = [nums[0]]
    for (let index = 0; index < nums.length; index++) {
        const e = nums[index];

        for (let index = 0; index < t.length; index++) {
            const list = t[index];
            if (list[list.length - 1] < e) {
                t.push(list.concat(e))
            }
        }
    }
};

// @lc code=end

