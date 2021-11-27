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
        this.mapTo = mapTo
    }

    sort(parent, child) {
        parent = this.mapTo ? this.mapTo(parent) : parent
        child = this.mapTo ? this.mapTo(child) : child
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
            let left = this.data[2 * i]
            let right = this.data[2 * i + 1]

            let idx = (left === undefined && 2 * i + 1) || (right === undefined && 2 * i) ||
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

let heap = new BinaryHeap(1)

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
    heap.delete(0)
)