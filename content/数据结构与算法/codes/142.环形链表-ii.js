/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let map = new Map()
    while (head) {
        if (map.has(head)) {
            return head
        } else {
            map.set(head, true)
            head = head.next
        }
    }

    return null
};
// @lc code=end

