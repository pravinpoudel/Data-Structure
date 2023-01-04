### 206. Reverse Linked List [Easy]

![image](https://user-images.githubusercontent.com/11494733/210494978-ebc0489f-4132-478d-bf07-39222ea3bbcb.png)

Link: https://leetcode.com/problems/reverse-linked-list/description/

Note:

Performanc is low: 

![image](https://user-images.githubusercontent.com/11494733/210495121-1412e3de-cf0b-45e5-a0a4-05f05f4b7b51.png)

```

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
var reverseList = function(head) {
     let lastOne = head
     if(!(lastOne || lastOne.next)){
         return head
     }
     let newNode = lastOne.next
     head.next = null
     const reverse = (node, lastOne)=>{
         if(node == null){
             return lastOne
         }
         let newNode = node.next
         node.next = lastOne
         return reverse(newNode, node)
     }
     return reverse(newNode, lastOne)
};

```
