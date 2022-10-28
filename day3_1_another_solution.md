// Rather than creating new LinkList this is just using same link list.

https://leetcode.com/problems/add-two-numbers/
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

![image](https://user-images.githubusercontent.com/11494733/198552582-6b461a96-b7a2-4095-9da4-c086c384c502.png)


```js
var addTwoNumbers = function(l1, l2) {
    head = new ListNode(null)
    previous = head
    carry = 0
    while(l1 || l2){
        current = l1 != null?l1:l2
        val1 = l1!=null?l1.val:0
        val2 = l2!= null?l2.val:0
        sum = val1+val2 + carry
        carry = 0
        if(sum>9){
            sum = sum - 10
            carry = 1
        }
        if(l1 != null){
            l1 = l1.next
        }
        if(l2 != null){
            l2 = l2.next
        }
        
        current.val = sum
        previous.next = current
        current.next = null
        previous = current
    }
    if(carry == 1){
        previous.next = new ListNode(1)
    }
    return head.next
    
};
```
