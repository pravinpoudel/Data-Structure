[Question](https://leetcode.com/problems/add-two-numbers/)
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4] <br />
Output: [7,0,8] <br />
Explanation: 342 + 465 = 807.

-------------------------------------------------------------------------------------------------------------------------------------------------------
  
function Node(val){
    this.val = val
    this.next = null
}

function LinkList(_array){
    if(_array.length ==0){
        return null;
    }
    value = _array[0]   
    let head = new Node(value)
    if(_array.length ==1 ){
        return head;
    }
    let previous = head;
    
    for(let i=1, _length = _array.length; i<_length; i++){
        
        value = _array[i]        
        let node = new Node(value)
        previous.next = node
        previous = node
    }
    return head       
}

function sumArray(list1Value, list2Value){
    let result1 = String(BigInt(list1Value.reverse().join("")) + BigInt(list2Value.reverse().join(""))).split("").reverse().map(Number);
    return result1
}
var addTwoNumbers = function(l1, l2) {
    
    let head1 = l1;
    let list1Value = [head1.val]
    while(head1.next){
        list1Value.push(head1.next.val)
        head1 = head1.next
    }
    head2 = l2;
    let list2Value = [head2.val]
    while(head2.next){
        list2Value.push(head2.next.val)
        head2 = head2.next
    }
    
    let summedArray = sumArray(list1Value, list2Value)
    return LinkList(summedArray)
};
