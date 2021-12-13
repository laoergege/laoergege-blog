/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let slow = head
    let quick = head && head.next

    while (slow) {
        slow = slow.next
        try {
            quick = quick.next.next
        } catch (error) {
            return false
        }

        if (slow === quick) {
            return true
        }
    }

    return false
};
// @lc code=end

