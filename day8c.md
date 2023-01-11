### 1838. Frequency of the Most Frequent Element

The frequency of an element is the number of times it occurs in an array.
You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.
Return the maximum possible frequency of an element after performing at most k operations.

![image](https://user-images.githubusercontent.com/11494733/211725068-12d08b48-a54f-4ba2-8d18-e76765c7c52b.png)

#### Code that i wrote that suffer from multiple problem and does not take advantage of two pointer technique

``` javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k, memo = {}) {
    let key = ""
    nums.sort(function(a, b) {
        return a - b;
    })
    nums.forEach((element, index)=>{
        key = key + "-" + element
    })
    key = key + "-" +  k
    if(nums[key]){
        return nums[key]
    }
    let result = []
    for(let i=0, _length = nums.length; i<_length; i++){
        let tempArray = [...nums]
        tempArray[i] += 1
        result[i] = maxFrequency(tempArray, k-1)
    }

    nums[key] = Math.max(...result)
    return nums[key]
};

function countFrequency(arr){
    let map = {}
    let maxFreq = 1
    for(let i=0, _length = arr.length; i<_length; i++){
        if(map.hasOwnProperty(arr[i])){
            map[arr[i]] += 1
            if(map[arr[i]]>maxFreq){
                maxFreq = map[arr[i]]
            }
        }
        else{
            map[arr[i]] = 1
        }
    }
    return maxFreq
}
```
