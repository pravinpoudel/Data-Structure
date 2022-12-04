![image](https://user-images.githubusercontent.com/11494733/205484684-77d31d86-b32a-4c78-a9af-cfd2c0b3fe34.png)

https://leetcode.com/problems/unique-paths/


### Recursive: 
```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m == 0 || n ==0){
        return 0
    }
    if(m == 1 && n == 1){
        return 1
    }

    return uniquePaths(m-1, n) + uniquePaths(m, n-1)
};

```
So in this brutforce the number time the recursive function is called is O(2^(m+n)) and space complexity is 0(m+n) which is the size of left most branch.

In dynamic programming we change all the number of possible recursive call to only number of unique recursive call. The number of unique nodes are n*m and space complexity is same because call stack which is size of left most branch height is same in both case.

Dynamic Programming:

```javascript
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, memory = {}) {
    if(m == 0 || n ==0){
        return 0
    }
    let key = m + "_" + n

    if(m == 1 && n == 1){
        return 1
    }
    
    if(key in memory){
        return memory[key]
    }

    

    memory[key] = uniquePaths(m-1, n, memory) + uniquePaths(m, n-1, memory)
    return memory[key]
};
```


![image](https://user-images.githubusercontent.com/11494733/205485205-92084378-c034-487a-8f08-2fcd5cb2a740.png)
