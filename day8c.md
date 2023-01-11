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

### This is a code after proper usage and this has many points using leverage of two pointer to simplify code abhove and get output

``` javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s == null){
        return 0
    }
    if(s.length == 1){
        return s.length
    }
    let start = 0
    let end = 0
    let maxSize = 0
    let stringMap = {}
    while(end<s.length){
        if(stringMap.hasOwnProperty(s[end])){
            newStart = stringMap[s[end]] + 1
            for(let i=start; i<=stringMap[s[end]]; i++){
                delete stringMap[s[i]]
            }
            start = newStart
            stringMap[s[end]] = end
        }
        else{
            stringMap[s[end]] = end
        }
        maxSize = Math.max(maxSize, (end-start + 1))
        end += 1
    }
    return maxSize
};
```
