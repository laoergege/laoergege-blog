/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (const el of s) {
        if (!(el in map)) {
            stack.push(el)
        } else {
            if (stack.pop() !== map(el)) return false
        }
    }

    return !stack.length
};
// @lc code=end

