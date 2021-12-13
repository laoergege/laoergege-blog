/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
 * @return {ListNode}
 */
// 快指针走两步，慢指针走一步，快指针到底，慢指针刚好在中间
var middleNode = function (head) {
    let slow = head
    let quick = head.next

    while (quick) {
        slow = slow.next

        try {
            quick = quick.next.next
        } catch (error) {
            return slow
        }
    }

    return slow
};
// @lc code=end

