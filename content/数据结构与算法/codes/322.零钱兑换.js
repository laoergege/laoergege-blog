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
// 动态规划
var coinChange = function (coins, amount) {
//     if (amount === 0) return 0

//     let i = 1;
//     let temp = coins.reduce((obj, key) => (obj[key] = 1, obj), {})
//     while (i <= amount) {
//         temp[i] ??= Math.min(...coins.map(c => (temp[i - c] ??= Infinity))) + 1
//         i++
//     }

//     return temp[amount] === Infinity ? -1 : temp[amount]
// };
// 动态规划 递归写法
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
// 回溯
// var coinChange = function (coins, amount) {
//     const result = []
//     dfs(coins, amount, result)
//     return Math.min(...result)
// }
// function dfs(coins, amount, result, target = 0, count = 0) {
//     if (target >= amount) {
//         return result.push(count)
//     }

//     for (const c of coins) {
//         dfs(coins, amount, result, target + c, count + 1)
//     }
}
// @lc code=end