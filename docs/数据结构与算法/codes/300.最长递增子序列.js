/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let temp = [[1]]
    for (let i = 1; i < nums.length; i++) {
        let arr = temp[i] ??= []
        arr[i] = 1
        for (let j = 0; j < i; j++) {
            const t = temp[i - 1][j]
            if (nums[j] < nums[i]) {
                arr[i] = arr[i] > t ? arr[i] : t + 1
            }

            arr[j] = t
        }
    }
    return Math.max(...temp[temp.length - 1])
};

// 回溯
// var lengthOfLIS = function (nums) {
//     return dfs(nums, 0, -Infinity, 0)
// };
// const temp = {}
// function dfs(nums, level, lastNum, result) {
//     if (level === nums.length) return result
//     if (temp[lastNum]) return temp[lastNum]

//     const target = nums[level]

//     const max = Math.max(
//         target > lastNum ? dfs(nums, level + 1, target, result + 1) : result,
//         dfs(nums, level + 1, lastNum, result)
//     )

//     return temp[lastNum] = max
// }
// @lc code=end

// console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]))