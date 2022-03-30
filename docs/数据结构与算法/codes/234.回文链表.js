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
    let slow = head
    let quick = head?.next

    while (quick && quick.next) {
        slow = slow.next
        quick = quick.next.next
    };

    slow = slow.next
    let end = reverse(slow)

    while (head && end) {
        if (head.val === end.val) {
            head = head.next
            end = end.next
        } else {
            return false
        }
    }

    return true
};

function reverse(head) {
    let pre = null
    let cur = head

    while (cur) {
        [cur.next, pre, cur] = [pre, cur, cur.next]
    }

    return pre
}
// @lc code=end

