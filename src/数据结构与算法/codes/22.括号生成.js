/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    dfs(str = '', n, n, res)
    return res
};

var dfs = function (str, left, right, res) {
    if (left === 0 && right === 0) {
        res.push(str)
        return
    }

    if (left !== 0) {
        dfs(str + '(', left - 1, right, res)
    }

    if (right !== 0 && right > left) {
        dfs(str + ')', left, right - 1, res)
    }
}

// @lc code=end

