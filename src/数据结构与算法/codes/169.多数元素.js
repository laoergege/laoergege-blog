/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const tmp = {}
    let max
    tmp[max] = 0
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index]
        tmp[num] = tmp[num] ? tmp[num] + 1 : 1
        if (tmp[num] >= tmp[max]) {
            max = num
        }
    }
    return max
};
// @lc code=end

