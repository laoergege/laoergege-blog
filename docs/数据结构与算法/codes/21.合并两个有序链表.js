/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head = new ListNode()
    let cur1 = list1
    let cur2 = list2
    let cur3 = head

    if (!(cur1 && cur2)) {
        return cur1 || cur2
    }

    while (cur1 && cur2) {
        if (cur1.val > cur2.val) {
            cur3.next = cur2
            cur2 = cur2.next
        } else {
            cur3.next = cur1
            cur1 = cur1.next
        }
        cur3 = cur3.next
    }

    let last = cur1 || cur2
    cur3.next = last

    return head.next
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
// @lc code=end

