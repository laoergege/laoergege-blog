class BinaryHeap {
    data = [null]
    get size() {
        return this.data.length - 1
    }

    insert(num) {
        this.data.push(num)
        this.heapifyUp(this.size)
    }
    heapifyUp(i) {
        let parent = this.data[Math.floor(i / 2)]
        let insertValue = this.data[i]
        while (i > 1 && parent < insertValue) {
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

            // 大顶堆，选出最大子元素
            let idx = (typeof left === 'number' ? left : 0) > (typeof right === 'number' ? right : 0) ? (2 * i) : (2 * i + 1)

            if (this.data[idx] > tmp) {
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

let heap = new BinaryHeap()

heap.insert(3)
heap.insert(2)
heap.insert(7)
heap.insert(6)
heap.insert(1)

console.log(heap.data)

console.log(
    heap.delete(0),
    heap.delete(0),
    heap.delete(0),
    heap.delete(0),
    heap.delete(0),
)