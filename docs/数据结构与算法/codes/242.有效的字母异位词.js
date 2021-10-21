/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const map = {}

    for (const char of s) {
        let num = map[char]
        map[char] = typeof num === 'undefined' ? 1 : (num + 1)
    }

    for (const char of t) {
        if (map[char]) {
            map[char] -= 1
        } else {
            return false
        }
    }

    return !Object.values(map).some(e => e !== 0)
};
// @lc code=end
