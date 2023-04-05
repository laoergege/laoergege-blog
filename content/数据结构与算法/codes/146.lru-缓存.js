/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */
// @lc code=start
/**
 * @param {number} capacity
 */
// var LRUCache = function (capacity) {
//     this.cache = new Map()
//     this.size = capacity
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function (key) {
//     // 如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据对应的结点，
//     // 并将其从原来的位置删除，然后再插入到链表的头部
//     if (this.cache.has(key)) {
//         const value = this.cache.get(key)
//         this.cache.delete(key)
//         this.cache.set(key, value)

//         return value
//     }

//     return -1
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function (key, value) {
//     if (this.cache.has(key)) {
//         // 如果此时缓存未满，则将此结点直接插入到链表的头部；
//         this.cache.delete(key)

//         // 如果此时缓存已满，则链表尾结点删除
//     } else if (this.cache.size === this.size) {
//         this.cache.delete(this.cache.keys().next().value)
//     }

//     this.cache.set(key, value)
// };

class LRUCache {
    constructor(size) {
        this.size = size
        this.cache = new Map()
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size === this.size) {
            const key = this.cache.keys().next().value
            this.cache.delete(key)
        }

        this.cache.set(key, value)
    }

    get(key) {
        if (this.cache.has(key)) {
            let value = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, value)

            return value
        }

        return -1
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

