/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    if (!head) {
        return head
    }

    // 1. 暴力解法，缓存记录
    // const map = [head]
    // let i = 0
    // while(head.next) {
    //     head = head.next
    //     map[++i] = head
    // }

    // return map[map.length - k]

    // 2. 快慢双指针
    let slow = head
    let quick = head
    let i = k - 1

    while (quick.next) {
        quick = quick.next
        if (--i < 0) {
            slow = slow.next
        }
    }
    return slow
};