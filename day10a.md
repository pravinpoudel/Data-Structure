### 19. Remove Nth Node From End of List

![image](https://user-images.githubusercontent.com/11494733/214464511-069909ed-2db0-47f3-8966-1099119041bf.png)

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //find the length of the link list
    if(head.next == null){
        return null
    }
    let count  = 0
    let temp = head
    let fast = head
    while(fast != null && fast.next != null){
        fast = fast.next.next
        count +=2
    }
    if(fast != null){
        count = count+1
    }
    console.log(count)
    if(count - n == 0){
        return head.next;
    }
    let toFindIndex = Math.max (count - n -1, 0)
    count = 0
    while(count != toFindIndex ){
        head = head.next
        count += 1
    }
    let newNext = head.next.next
    head.next = newNext
   
   return temp
};

```
You could have just made a condition where slow pointer or left pointer would end at n distance from the end rather than have to find a length and then indexToFind.

This code passed the test but the problem is that we have to iterate over the link list twice whereas we can do it
in first time using left and right pointer at a distance of n moving a step at a time.

### optimal 
```javascript
var removeNthFromEnd = function(head, n) {
    //find the length of the link list
    if(head.next == null){
        return null
    }
   let left = head
   let right = head
   let count = 0
   while(count != n){
       right = right.next
       count += 1
   }
   if(right == null){
       return head.next
   }
   let temp
   while(right != null){
       temp = left
       left = left.next
       right = right.next
   }
   temp.next = left.next
   return head
};
```
