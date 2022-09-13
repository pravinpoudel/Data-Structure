### 234. Palindrome Linked List

https://leetcode.com/problems/palindrome-linked-list/

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

-----------------------------------------------------------------------------------------------

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
    bool isPalindrome(ListNode* head) {
        if(head == NULL){
            return false;
        }   
        vector<int> numberList;
        while(head != NULL){
            numberList.emplace_back(head->val);
            head = head->next;
        }
        int vectorSize = numberList.size();
        
        if(vectorSize == 1){
            return true;
        }
        
        for(int i=0; i<vectorSize/2; i++){
            if(numberList[i] != numberList[vectorSize-i-1]){
                return false;
            }
        }
        return true;
    }
    
};

```
