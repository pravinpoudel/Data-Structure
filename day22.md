### 206. Reverse Linked List

https://leetcode.com/problems/reverse-linked-list/

Given the head of a singly linked list, reverse the list, and return the reversed list.

------------------------------------------------------------------------------------------

Brutforce:

```cpp

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if(head == NULL){
            return NULL;
        }
        ListNode* pivotPoint = head;
        while(pivotPoint->next != NULL){
            ListNode* right = pivotPoint->next;
            ListNode* temp = right->next;
            right->next = head;
            pivotPoint->next = temp;            
            head = right;
        }
    return head;
    }
};

```
