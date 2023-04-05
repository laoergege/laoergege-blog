/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 1. 暴力解法，数组缓存
    // let _head = new ListNode(null, head)
    // let cur = _head
    // let temp = []

    // while (cur) {
    //     temp.push(cur)
    //     cur = cur.next
    // }

    // let node = temp[temp.length - n - 1]
    // node.next = node.next.next

    // return _head.next

    // 2. 快慢指针
    head = new ListNode(null, head)
    let quick = head;
    let slow = head;

    while (quick && quick.next) {
        quick = quick.next;

        if (n) {
            n--;
        } else {
            slow = slow.next;
        }
    }

    slow.next = slow.next && slow.next.next;

    return head.next;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
// @lc code=end
