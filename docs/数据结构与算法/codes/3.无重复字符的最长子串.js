/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let cache = {}
    let left = 0
    let right = 0
    let max = 0

    while (right < s.length) {
        const c = s[right];

        if (typeof cache[c] !== 'undefined') {
            left = left > cache[c] ? left : cache[c] + 1
        }

        max = Math.max(max, right - left + 1)
        cache[c] = right
        right++
    }

    return max
};  
// @lc code=end

