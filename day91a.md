### 234. Palindrome Linked List
https://leetcode.com/problems/palindrome-linked-list/description/

![image](https://user-images.githubusercontent.com/11494733/213355091-f227e366-586f-450d-9eb2-02c1cab4e211.png)


``` javascript
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
var isPalindrome = function(head) {
    let valArray = []
    while(head){
        valArray.push(head.val)
        head = head.next;
    }
    let start = 0
    let end = valArray.length-1
    while(start<end){
        if(valArray[start] != valArray[end]){
            return false
        }
        start += 1
        end -= 1
    }
    return true
};

```

### Optimum solution
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head.next == null){
        return true
    }
    let slow = head;
    let fast = head;
    let temp;
    while(fast && fast.next ){
        fast = fast.next.next
        temp = slow
        slow = slow.next
    }
    //now reverse the second half of the list
    let prev = null
    while(slow){
        let temp = slow.next
        slow.next = prev
        prev= slow
        slow = temp
    }

    while(prev){
        if(prev.val != head.val){
            return false
        }
        prev = prev.next
        head = head.next
    }
    return true
};
```
