### 1. Two Sum

https://leetcode.com/problems/two-sum/description/

![image](https://user-images.githubusercontent.com/11494733/210959217-64235b4a-daca-4f33-98be-c39a36a8acb7.png)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    for(let i=0; i<nums.length; i++){
        map[nums[i]] = i
    }
    for(let i=0; i<nums.length; i++){
        let required = "" + target-nums[i]
        if(map.hasOwnProperty(required) && map[required] != i){
            return [i, map[required]]
        }
    }
};
```

``` javascript
var twoSum = function(nums, target) {
    let map = {}
    for(let i=0; i<nums.length; i++){
    	if(map.hasOwnProperty(nums[i])){
      	map[nums[i]] = [...map[nums[i]], i]
      }
      else{
        map[nums[i]] = [i]      
      }
    }
    
    for(let i=0; i<nums.length; i++){
        let required = "" + target-nums[i]
        if(map.hasOwnProperty(required)){
            if(map[required].length == 1 && map[required][0] != i){
                 return [i, map[required]]
            }
            else if(map[required].length > 1){
                let solution = []
                map[required].forEach((element, index)=>{
                    if(element != i){
                        solution.push([i, element])
                    }
                })
                return solution
            }
        }
    }
};
```
