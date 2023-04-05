/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * 1. 暴力遍历解法
 * 2. 暴力遍历解法 + 双指针
 * 3. 二分查找
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[right] < nums[mid]) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return nums[left]
};
// @lc code=end

