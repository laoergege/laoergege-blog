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
    dfs(0, 0, n, str = '', res)
    return res
};

var dfs = function(left, right, n, str, res) {
    // 保证左括号>=右括号，并且不超过n
    if(left < right || left > n || right > n) {
        return
    }

    if(left === n && right === n) {
        res.push(str)
        return
    }

    if(left < n) {
        r(left + 1, right, n, str + '(', res)
    }

    if(right < n) {
        r(left, right + 1, n, str + ')', res)
    }
}

// @lc code=end

