/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    return dfs(coins.sort((a, b) => (b - a)), amount, 0)
};

function dfs(coins, amount, level = 0) {
    if (amount === 0) {
        return level
    }

    let min = Infinity
    for (const c of coins) {
        let _amount = amount - c
        if (_amount >= 0) {
            min = Math.min(min, coinChange(coins, _amount, level + 1))
        }
    }

    return min === Infinity ? -1 : min
}
// @lc code=end

