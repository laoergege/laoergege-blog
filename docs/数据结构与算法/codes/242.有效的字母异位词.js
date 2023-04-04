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
    if (s.length === t.length) {
        const map = {}

        for (let i = 0; i < s.length; i++) {
            let _s = s[i]
            let _t = t[i]

            map[_s] ??= 0
            map[_s] += 1

            map[_t] ??= 0
            map[_t] -= 1
        }

        return !Object.values(map).some(e => e !== 0)
    } else {
        return false
    }
};
// @lc code=end
