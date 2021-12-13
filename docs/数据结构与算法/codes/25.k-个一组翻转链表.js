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

    let temp = [head]
    let cur = head
    let i = 0
    while (cur) {
        cur = cur.next
        i++
        if (i % k === 0) {
            temp.push(cur)
        }
    }
};

function reverse(head, k) {
    let pre = null
    let cur = head
    let next = head.next
    let i = 0
    while (cur && i < k) {
        cur.next = pre

        pre = cur
        cur = next
        next = cur.next
        i++
    }

    head.next = reverseKGroup(next, k)

    return cur
}
// @lc code=end

