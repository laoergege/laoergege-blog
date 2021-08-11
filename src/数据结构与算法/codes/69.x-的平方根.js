/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) {
        return x
    }

    let left = 1
    let right = x
    while (left < right && (left + 1) !== right) {
        let mid = Math.floor((left + right) / 2)

        if (mid * mid > x) {
            right = mid
        } else {
            left = mid
        }
    }

    return left
};
// @lc code=end

