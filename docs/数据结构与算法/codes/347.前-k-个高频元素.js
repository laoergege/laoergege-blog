/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    for (let index = 0; index < nums.length; index++) {
        if (map.has(nums[index])) {
            map.set(nums[index], map.get(nums[index]) + 1)
        } else {
            map.set(nums[index], 1)
        }
    }

    let heap = new BinaryHeap(1, (e) => e[1]) // 大顶堆
    const entries = Array.from(map)
    for (const e of entries) {
        if (heap.size < k) {
            heap.insert(e)
        } else if (heap.top[1] < e[1]) {
            heap.delete(0)
            heap.insert(e)
        }
    }
    return heap.data.slice(1).map(e => e[0])
};

class BinaryHeap {
    data = [null]
    get size() {
        return this.data.length - 1
    }
    get top() {
        return this.data[1]
    }

    constructor(isBigTop, mapTo) {
        this.isBigTop = isBigTop < 0 ? true : false
        this.mapTo = mapTo || (e => e)
    }

    sort(parent, child) {
        parent = this.mapTo(parent)
        child = this.mapTo(child)
        return this.isBigTop ? parent > child : parent < child
    }

    insert(num) {
        this.data.push(num)
        this.heapifyUp(this.size)
    }
    heapifyUp(i) {
        let parent = this.data[Math.floor(i / 2)]
        let insertValue = this.data[i]
        while (i > 1 && !this.sort(parent, insertValue)) {
            this.data[i] = parent
            i = Math.floor(i / 2)
            parent = this.data[Math.floor(i / 2)]
        }
        this.data[i] = insertValue
    }

    delete(i) {
        i += 1
        let value = this.data[i]
        this.data[i] = this.data[this.size]
        this.heapifyDown(i)
        return value
    }
    heapifyDown(i) {
        let tmp = this.data[i]
        while (2 * i < this.data.length) {
            let left = this.data[2 * i] && this.mapTo(this.data[2 * i])
            let right = this.data[2 * i + 1] && this.mapTo(this.data[2 * i + 1])

            let idx = (right === undefined && 2 * i) ||
                (this.isBigTop ? left > right : left < right) ? (2 * i) : (2 * i + 1)

            if (!this.sort(tmp, this.data[idx])) {
                this.data[i] = this.data[idx]
                i = idx
            } else {
                break
            }
        }
        this.data[i] = tmp
        this.data.pop()
    }
}
// @lc code=end

