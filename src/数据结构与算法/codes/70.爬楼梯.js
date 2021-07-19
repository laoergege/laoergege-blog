/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    // 缓存计算
    if (!climbStairs.tmp) {
        climbStairs.tmp = {}
    }

    return climbStairs.tmp[n] || (climbStairs.tmp[n] = climbStairs(n - 1) + climbStairs(n - 2))
};
// @lc code=end

