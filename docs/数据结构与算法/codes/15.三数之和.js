/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums = [...new Set(nums)]

    let cache = new Map()
    const result = []
    for (const num of nums) {
        let target = -num

        for (const num2 of nums) {
            if (num === num2) {
                continue
            }

            target -= num2

            if (cache.has(target)) {
                result.push(cache.get(target).concat(target))
            } else {
                cache.set(target, [num, num2])
            }
        }
    }

    return result
};
// @lc code=end

