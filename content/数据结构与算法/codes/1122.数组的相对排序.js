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
        map.set(e, [])
    }

    for (const e of arr1) {
        if (map.has(e)) {
            let t = map.get(e)
            t.push(e)
        } else {
            let t = obj[e] ? obj[e] : (obj[e] = [])
            t.push(e)
        }
    }

    let result = []
    for (let [, val] of map) {
        result = result.concat(val)
    }
    let keys = Object.keys(obj)
    for (let key of keys) {
        result = result.concat(obj[key])
    }

    return result
};
// @lc code=end

