
### Max sum of any contigous subarray of Size k

https://www.youtube.com/watch?v=__guhvzO540&ab_channel=JAVAAID-CodingInterviewPreparation

Given an array of integers n and a positive number k, find the maximum sum of any contiguous subarray of size k

Example:

Input: [2, 1, 5, 1, 3, 2], k = 3

Output: 9

Explanation: Subarray with maximum sum is [5, 1, 3]


```cpp

#include <iostream>
#include <vector>


using namespace std;

class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int firstPointer = 0;
        int secondPointer = k-1;
        int windowSum = 0;
        
        for(int i=0; i<k; i++){
            windowSum += nums[i];
        }
        
        if(k== nums.size()){
            return windowSum;
        }
        
        int maxSum = windowSum;
        
        while(secondPointer< nums.size()){
            windowSum = windowSum - nums[firstPointer] + nums[secondPointer];
            if(windowSum>maxSum){
                maxSum = windowSum;
            }
            firstPointer++;
            secondPointer++;
        }
        return maxSum;
                
    }
};

int main()
{
    cout<<"Hello World";
    Solution resultObj;
    vector<int> input = {1, 2, 3, 4, 5, -1, -1, 6};
    int result = resultObj.subarraySum(input, 3);
    cout<<result<<" ";

    return 0;
}

```
