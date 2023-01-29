### 300. Longest Increasing Subsequence

![image](https://user-images.githubusercontent.com/11494733/215303904-116cc806-f887-4e41-b02a-9f9c7a41ade3.png)


```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */

var lengthOfLIS = function(nums) {
    let memo = {}
    function findLIS(index, nums, memo){
        if(index in memo) return memo[index]
        if(nums.length == index){
            return 0
        }
        let result=[0];
        for(let i=index+1; i<nums.length; i++){
            if(nums[i]>nums[index]){
                result1 = findLIS(i,nums, memo)
                result.push(result1)
            }
        }
        let returnedValue = Math.max(...result)
        memo[index] = (returnedValue +1)
        return (returnedValue +1)
    }

    let finalResult = []
    for(let i=0;i<nums.length; i++){
        finalResult.push(findLIS(i, nums, memo))
    }
    return Math.max(...finalResult,)
};
```

