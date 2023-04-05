/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if (amount === 0) return 0

    return dfs(amount, coins, {})
};

function dfs(amount, coins, temp = {}) {
    if (amount === 0) return 1

    if (temp[amount]) return temp[amount]

    let result = 0
    for (const c of coins) {
        let _amount = amount - c

        if (_amount >= 0) {
            result += dfs(_amount, coins, temp)
        }
    }
    temp[amount] = result

    return result
}
// @lc code=end

console.log(change(5, [1, 2, 5]))