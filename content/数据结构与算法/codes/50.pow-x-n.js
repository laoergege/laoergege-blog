/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start

var myPow = function (x, n) {
    // 特殊条件 n 处理
    if (n < 0) {
        x = 1 / x
        n = -n
    }

    // 边界条件
    if(n === 0) {
        return 1
    }

    // 1. 递归、分治
    let res = myPow(x, Math.floor(n / 2))
    return n % 2 === 0 ? res * res : res * res * x

    // 2. 迭代、分治
    // let res = x;
    // let idx = 1;
    // while (idx * 2 <= n) {
    //     res *= res;
    //     idx *= 2;
    // }

    // return res * myPow(x, n - idx)
};
// @lc code=end

