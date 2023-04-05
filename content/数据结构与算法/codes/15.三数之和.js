/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) {
        return []
    }

    // 三数转两数 
    // nums.sort()
    // const res = new Set()
    // for (const [i, a] of nums.entries()) {
    //     let tmp = {}
    //     for (const b of nums.slice(i + 1)) {
    //         let c = -(a + b)

    //         if (c in tmp) {
    //             res.add([a, b, c].toString())
    //         } else {
    //             tmp[b] = 1
    //         }
    //     }
    // }

    // return Array.from(res).map(s => s.split(","))

    // 
    nums.sort((a, b) => a - b)
    const res = []
    for (const [i, a] of nums.entries()) {
        let l = i + 1
        let r = nums.length - 1

        while (l !== r) {
            let target = a + nums[l] + nums[r]

            if (target === 0) {
                res.push([a, nums[l], nums[r]])
            } else {
                while (target > 0 && nums[r] === nums[--r]) { }
                while (target < 0 && nums[l] === nums[++l]) { }
            }
        }
    }
    return res
};
// @lc code=end

/**
 * 数组方法
 */
