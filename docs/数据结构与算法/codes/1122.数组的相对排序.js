/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let map = new Map()
    let obj = {}
    for (const e of arr2) {
        map.set(e, 0)
    }

    for (const e of arr1) {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1)
        } else {
            obj[e] = obj[e] ? obj[e] + 1 : 1
        }
    }

    const result = []
    for (let [key, val] of map) {
        while (val !== 0) {
            result.push(key)
            val--
        }
    }
    for (let key in obj) {
        let val = obj[key]
        while (val !== 0) {
            result.push(key)
            val--
        }
    }

    return result
};
// @lc code=end

