/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let quick = head
    let slow = head

    while (quick.next) {
        try {
            quick = quick.next.next
            slow = slow.next
        } catch (error) {
            break
        }
    };

    slow = slow.next

    while (head && slow) {
        if (head.val === slow.val) {
            head = head.next
            slow = slow.next
        } else {
            return false
        }
    }

    return true
};
// @lc code=end

