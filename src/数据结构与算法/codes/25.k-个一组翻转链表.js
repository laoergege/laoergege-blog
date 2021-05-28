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
var reverseKGroup = function(head, k) {
    // if(!head) {
    //     return head
    // }

    // let cur = head
    // let first = head
    // let next = null

    // let i = 1
    // while (i < k && cur.next) {
    //     cur = cur.next
    //     i++
    // }

    // if(i < k) {
    //     return first
    // }

    // let pre = reverseKGroup(cur.next, k)

    // // 重置
    // cur = first

    // // reserve
    // while (cur && cur.next && i > 0) {
    //     next = cur.next
    //     cur.next = pre

    //     pre = cur
    //     cur = next
    //     i--
    // }
    
    // return pre

    if(!head) {
        return head
    }

    let cur = head
    let first = head
    let pre = null
    let next = null
    let i = 1
    while (cur) {
        next = cur.next
        cur.next = pre

        if(i < 2) {
            pre = cur
            cur = next
            i++
        }
    }

    first.next = reverseKGroup(next, k)

    return cur
};
// @lc code=end

