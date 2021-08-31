/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num === 1) {
        return true
    }

    let left = 1
    let right = Math.floor(num / 2)
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let res = mid * mid
        if (res === num) {
            return true
        } else if (res > num) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return false
};
// @lc code=end

