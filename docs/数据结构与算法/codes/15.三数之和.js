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

    const result = []
    nums.sort((a, b) => (a - b))

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        let l = i + 1
        let r = nums.length - 1

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        while (l < r) {
            let res = num + nums[l] + nums[r]

            if (res > 0) {
                r--
            } else if (res < 0) {
                l++
            } else {
                result.push([num, nums[l], nums[r]])

                while (l < r && (nums[l] === nums[l + 1])) l++
                while (l < r && (nums[r] === nums[r - 1])) r--
                l++
                r--
            }
        }
    }

    // for (let i = 0; i < nums.length; i++) {
    //     const num = nums[i];
    //     const cache = {}
    //     const tmp = {}

    //     if (i >= 1 && num == nums[i - 1]) {
    //         continue
    //     }

    //     for (let j = i + 1; j < nums.length; j++) {
    //         const num2 = nums[j];

    //         if (cache[num2]) {
    //             let arr = [num, num2, -num - num2]
    //             let key = JSON.stringify(arr)
    //             if (!tmp[key]) {
    //                 result.push(arr)
    //             }
    //             tmp[key] = 1
    //         } else {
    //             cache[-num - num2] = 1
    //         }
    //     }
    // }

    return result
};
// @lc code=end

