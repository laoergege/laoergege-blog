/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let queue = new Array(k)
    const result = []

    for (let i = 0; i < nums.length; i++) {

        // for (let j = i; j < i + k; j++) {

        // }
        if (i + k > nums.length) {
            break
        }

        result.push(Math.max(...nums.slice(i, i + k)))
    }

    return result
};
// @lc code=end

