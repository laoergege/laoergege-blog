/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var getLeastNumbers = function(arr, k) {
    const sortedArr = arr.sort((a, b) => (a - b))
    return sortedArr.slice(0, k)
};

/**
 * 1. NlogN: 排序、查找前 k 个 
 * 2. NlogK: heap，本题是求前 K 小，因此用一个容量为 K 的大根堆，每次 poll 出最大的数，那堆中保留的就是前 K 小啦
 * 3. quick-sort
 * 
 * js sort 老是忘
 */