### 21. Merge Two Sorted Lists

![image](https://user-images.githubusercontent.com/11494733/210505620-7fed5ce9-a81d-474c-b68b-9d559d40759a.png)

URL:
https://leetcode.com/problems/merge-two-sorted-lists/description/

```
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
var mergeTwoLists = function(list1, list2) {
    if(!(list1 && list2)){
        if(!list1){
            return list2
        }
        else{
            return list1
        }
    }
    let head = list1.val <= list2.val ? list1: list2
    newList1 = list1
    newList2 = list2
    let recursiveMerge = (previousList1, list1, list2) =>{
    if(list1 == null || list2 == null){
        if(list2 != null){
            previousList1.next = list2
        }
        return head
    }

    if(list1.val<list2.val){
        // move forward
        newList1 = list1.next
        newList2 = list2

        if(list1.next){
            if(list1.next.val<list2.val){
               newList1 = list1.next
                newList2 = list2
            }

            else{
            let temp = list2.next
            list2.next = list1.next
            list1.next = list2
            newList1 = list2
            newList2 = temp
            
            }
        }
           

        }
    
    else if(list1.val == list2.val){
            let temp = list2.next
            list2.next = list1.next
            list1.next = list2
            newList1 = list2
            newList2 = temp

    }
    else{
        let temp = list2.next
        list2.next = list1
        newList1 = list2
        newList2 = temp
    }
    
    return recursiveMerge(list1, newList1, newList2)
    }

    return recursiveMerge(null, newList1, newList2)

};
```
