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
    if (amount === 0) return 0

    let i = 1;
    let temp = coins.reduce((obj, key) => (obj[key] = 1, obj), {})
    while (i <= amount) {
        temp[i] ??= Math.min(...coins.map(c => (temp[i - c] ??= Infinity))) + 1
        i++
    }

    return temp[amount] === Infinity ? -1 : temp[amount]
};
// 回溯
// var coinChange = function (coins, amount) {
//     return dfs(coins, amount, 0)
// };
// var temp = {}
// function dfs(coins, amount, level = 0) {
//     if (amount === 0) return level

//     if (temp[amount]) return temp[amount]

//     let min = Infinity
//     for (const c of coins) {
//         let _amount = amount - c
//         if (_amount >= 0) {
//             temp[amount] = dfs(coins, _amount, level + 1)
//             min = Math.min(min, temp[amount])
//         }
//     }

//     return min === Infinity ? -1 : min
// }
// @lc code=end

// console.log(coinChange([2], 4))