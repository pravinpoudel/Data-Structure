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

### Bottom-up approach

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let distArray = []
    for(let i=0, _length = nums.length; i<_length; i++){
        distArray.push([nums[i]])
    }

    while(distArray.length>1){
        let mergedArray= []
        for(let i=0, _length = distArray.length; i<_length; i+=2){
                if(distArray[i+1] == undefined){
                    mergedArray.push(distArray[i])
                }
                else{
                    let result = sort(distArray[i], distArray[i+1])
                    mergedArray.push(result)
                }
        }
        distArray = mergedArray 
    }
    return distArray[0]
};

    function sort(arr1, arr2){
        let pointer1 = 0
        let pointer2 = 0
        let result = []
        while(pointer1<arr1.length || pointer2 < arr2.length){
            
            if(pointer1>=arr1.length){
                result.push(arr2[pointer2])
                pointer2 += 1
            }
            else if(pointer2 >= arr2.length){
                result.push(arr1[pointer1])
                pointer1 += 1
            }

            else{
                if(arr1[pointer1]>= arr2[pointer2]){
                    result.push(arr2[pointer2])
                    pointer2 += 1
                }
                else{
                    result.push(arr1[pointer1])
                    pointer1 += 1
                }
            }
        }
        return result
    }

```
