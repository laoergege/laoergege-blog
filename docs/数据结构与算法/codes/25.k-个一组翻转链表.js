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
    if (!head) return head

    let i = k
    let p = head
    while (i-- > 0) {
        if (!p.next) return head
        p = p.next
    }

    i = k
    let prev = null;
    let cur = head;
    let next;
    while (cur && i-- > 0) {
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    head.next = reverseKGroup(cur, k)

    return prev
};
// @lc code=end

