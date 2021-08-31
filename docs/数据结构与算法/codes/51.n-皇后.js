/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    // const template = (Array.from(new Array(n))).map(e => '.').join('')
    // const sorts = []
    // const result = []
    // for (let index = 0; index < n; index++) {
    //     const t = Array.from(template)
    //     t.splice(index, 1, 'Q')
    //     sorts.push([t.join(''), index]) // 记录 x
    // }
    dfs(n, 0, 0, [], result)
    return result
};

function dfs(n, row, col, res) {
    if (!res.length) {
        res.push([row, col])
        dfs(n, row + 1, col, [...res])
    } else {
        dfs(n,)
    }
}
// @lc code=end

