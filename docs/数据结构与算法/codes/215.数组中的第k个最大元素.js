/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let heap = new BinaryHeap()
    let i = 0
    while (i < nums.length) {
        if (heap.size < k) {
            heap.insert(nums[i])
        } else if (heap.heapTop < nums[i]) {
            heap.delete(0)
            heap.insert(nums[i])
        }
        i++
    }
    return heap.heapTop
};

class BinaryHeap {
    data = [null]
    get size() {
        return this.data.length - 1
    }
    get heapTop() {
        return this.data[1] || 0
    }

    insert(num) {
        this.data.push(num)
        this.heapifyUp(this.size)
    }
    heapifyUp(i) {
        let parent = this.data[Math.floor(i / 2)]
        let insertValue = this.data[i]
        while (i > 1 && parent > insertValue) {
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
        while (i < this.data.length) {
            let left = this.data[2 * i]
            let right = this.data[2 * i + 1]

            let idx = (typeof left === 'number' ? left : 0) < (typeof right === 'number' ? right : 0) ? (2 * i) : (2 * i + 1)

            if (this.data[idx] < tmp) {
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

