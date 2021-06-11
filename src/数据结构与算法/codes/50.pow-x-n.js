/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var fastPow = function (x, n) {
    if(n === 0) {
        return 1
    }
    let res = fastPow(x, Math.floor(n / 2))
    if(n % 2 === 0) {
        return res * res
    } else {
        return res * res * x
    }
}

var myPow = function(x, n) {
    if(n < 0) {
        x = 1 / x;
        n = -n
    }
    return fastPow(x, n)
};
// @lc code=end

