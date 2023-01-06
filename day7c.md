### Find index of continous subarray sum in sorted array

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let target = k
    
    let start = 0
    let end = 1
    let sum = 0
    sum += nums[start] + nums[end]
    if(sum == target){
        console.log(" i am here")
        return [start, end]
    }

    if(sum>target){
        return []
    }
    end++
    
    while(start<end && end< nums.length){        
        sum += nums[end]
        console.log(sum)
        while(sum>target && start<end){
            sum -= nums[start]
            start++
        }
        if(sum%target == 0){
            console.log(start, end)
            return [start, end]
        }
        else{
            end++
        }
    }
    return []
};
```
