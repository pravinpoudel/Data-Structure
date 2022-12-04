![image](https://user-images.githubusercontent.com/11494733/205489001-0f950ca6-0c8b-46e0-8f2f-65a95767fb0c.png)

https://leetcode.com/problems/target-sum/


So i am trying to solve different thing !
I am trying to tweak this and find the number of way i can sum a number given in an array to create a target as sum.

### Recursive

The problem here is that, in this code i am applying very simple recursive method and normal recursive method consider all the element as if their order is important !!


```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    if(target ==0){
        return 1
    }
    if(target<0 || nums.length ==0){
        return 0
    }
    let result = 0
    for(let i=0; i<nums.length; i++){
        let newTarget = target-nums[i]
        let newArray = nums.slice();
        newArray.splice(i, 1)
        result += findTargetSumWays(newArray, newTarget )
    }
    return result
};
```
For test case of :

nums =
[2, 3, 5 7, 8]
target =
10

The result expected is 3 but it gives 10.

Like, in this it is counting [2, 3, 5], [3, 2, 5], [5, 2, 3], [5, 3, 2], [2, 5, 3], [3, 5, 2] as three different values and sum each time to give 6 times for this values only and 4 other.

