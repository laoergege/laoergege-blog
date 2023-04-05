/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let temp = nums[mid]
        if (temp !== target) {
            left = temp > target ? left : mid + 1
            right = temp > target ? mid - 1 : right
        } else {
            return mid
        }
    }

    return -1
};
// @lc code=end

