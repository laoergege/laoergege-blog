/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    for (let index = 0; index < matrix.length; index++) {
        const list = matrix[index];
        const ll = list[list.length - 1]
        if (ll >= target) {
            if (ll === target) {
                return true
            }

            let left = 0
            let right = list.length - 1

            while (left <= right) {
                let mid = Math.floor((left + right) / 2)

                if (list[mid] === target) {
                    return true
                } else if (list[mid] > target) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }

            return false
        }
    }
    return false
};
// @lc code=end

