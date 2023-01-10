### Merge sort:

https://leetcode.com/problems/sort-an-array/

Given an array of integers nums, sort the array in ascending order and return it.
You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.



### TOP-DOWN APPROACH: 

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length == 1){
        return nums
    }
    let divideCursor = Math.ceil(nums.length/2)
    let firstPart = nums.slice(0, divideCursor)
    let secondPart = nums.slice(divideCursor, nums.length)
    let result1 = sortArray(firstPart)
    let result2 = sortArray(secondPart)
    let pointer1 = 0
    let pointer2 = 0
    let sortedArray = []
    while(pointer1 < result1.length || pointer2 < result2.length){
        
        if(pointer1 >= result1.length){
            sortedArray.push(result2[pointer2])    
            pointer2 += 1        
        }

        else if(pointer2 >= result2.length){
            sortedArray.push(result1[pointer1])            
            pointer1 += 1
        }
        else{
            if(result1[pointer1] <= result2[pointer2]){
                sortedArray.push(result1[pointer1])
                pointer1 += 1
            }
            else{
                sortedArray.push(result2[pointer2])
                pointer2 += 1
            }
        }

    }
    return sortedArray

};
```
