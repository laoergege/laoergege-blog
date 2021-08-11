/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        /**
         * 二分判断条件
         * 有一边数据是递增，判断目标数据与 low、high 对比
         */

        if (nums[mid] === target) {
            return mid
        } else if (nums[left] < nums[mid]) {
            if ((target >= nums[left] && target < nums[mid])) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if ((target >= nums[mid + 1] && target <= nums[right])) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return -1
};
// @lc code=end

