![image](https://user-images.githubusercontent.com/11494733/205441584-ab60e28f-ec63-4c10-af26-60122f83186f.png)

https://leetcode.com/problems/maximum-subarray/

## BRUTFORCE:

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -9999
    if(nums.length == 1){
        return nums[0]
    }
    if(nums.length == 2){
        return nums[0] + nums[1]
    }
    
    for(let i=0, _length = nums.length; i<_length-1; i++){
        let sum =nums[i]
        for (j=i+1; j<_length; j++){
            sum += nums[j]
            if(sum>maxSum){
                maxSum = sum
            }
        }
    }
    return maxSum
};
```
