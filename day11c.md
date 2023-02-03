![image](https://user-images.githubusercontent.com/11494733/216481930-877cbb0a-940a-42d5-b4a1-466574ecaea5.png)

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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head == null){
        return null
    }
    if(head.next == null){
        return head
    }
    let odd = head
    let even = head.next
    let temp = even
    while(even && even.next){
        odd.next = odd.next.next
        even.next = even.next.next
        odd = odd.next
        even = even.next
    }
    odd.next = temp
    return head 
};
```
