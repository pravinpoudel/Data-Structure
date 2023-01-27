### 143. Reorder List

https://leetcode.com/problems/reorder-list/description/

![image](https://user-images.githubusercontent.com/11494733/215024636-203eb55a-dabc-43b8-8b8a-9257f69e3e83.png)


```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head.next == null){
        return head
    }
    let [left, right] = findMid(head)
    right = reverseList(right)
    return merge(left, right)
};

function merge(l1, l2){
    let head = l1
    let temp1;
    let temp2;
    let lastL2
    while(l1 && l2){
        temp1 = l1.next
        temp2 = l2.next
        l1.next = l2
        lastL2 = l2
        l2.next = temp1
        l2 = temp2
        l1 = temp1
    }
    if(l2 != null){
        lastL2.next = l2
    }
    return head
}

function reverseList(list){
    let l1 = list
    let l2 = list.next
    l1.next = null
    let temp
    while(l2){
        temp = l2.next
        l2.next = l1
        l1 = l2
        l2 = temp
    }
    return l1
}
function findMid(head){
    let slow = head
    let fast = head
    let temp
    while(fast && fast.next){
        temp = slow
        slow = slow.next
        fast = fast.next.next
    }
    temp.next = null
    return [head, slow]
}
```
