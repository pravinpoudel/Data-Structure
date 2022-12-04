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
