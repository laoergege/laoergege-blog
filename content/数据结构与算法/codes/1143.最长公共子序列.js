/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let dp = ([...new Array(text2.length)]).map(e => new Array(text1.length));

    for (let row = 0; row < text2.length; row++) {
        for (let col = 0; col < text1.length; col++) {
            if (text1[col] === text2[row]) {
                dp[row][col] = 1 + (
                    row - 1 >= 0 && col - 1 >= 0 &&
                    dp[row - 1][col - 1] ||
                    0
                )
            } else {
                dp[row][col] = Math.max(
                    row - 1 >= 0 && dp[row - 1][col] || 0,
                    col - 1 >= 0 && dp[row][col - 1] || 0
                )
            }
        }
    }

    return dp[text2.length - 1][text1.length - 1]
};
// @lc code=end

