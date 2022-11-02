/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, mem = {}) {
    if (n < 2) {
        return n
    }

    if (typeof mem[n] !== 'undefined') return mem[n]

    return mem[n] = fib(n - 1, mem) + fib(n - 2, mem)
};
// var fib = function(n) {
//     if (n < 2) {
//         return n
//     }

//     return fib(n - 1) + fib(n - 2)
// };
// @lc code=end

