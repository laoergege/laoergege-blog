/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if(!head) {
        return head
    }

    let arr = []
    let i = k
    while (head && i > 0) {
        arr.push(head)
        head = head.next
        i--
    }
    if (arr.length < k) {
        return arr[0]
    }

    arr.reverse()
    for (let index = 0; index < arr.length - 1; index++) {
        arr[index].next = arr[index + 1]
    }
    arr[arr.length - 1].next = reverseKGroup(head, k)

    return arr[0]
};
// @lc code=end

