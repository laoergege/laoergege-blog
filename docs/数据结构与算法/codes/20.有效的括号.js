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

    for (const el of s) {
        if (el === '(' || el === '{' || el === '[') {
            stack.push(el)
        } else {
            const top = stack.pop()
            if (
                (top === '(' && el === ')') ||
                (top === '{' && el === '}') ||
                (top === '[' && el === ']')
            ) {
                continue
            } else {
                return false
            }
        }
    }

    return !stack.length
};
// @lc code=end

