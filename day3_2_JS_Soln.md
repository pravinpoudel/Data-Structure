[Question](https://leetcode.com/problems/add-strings/) <br>
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.<hr /> 


![image](https://user-images.githubusercontent.com/11494733/198558365-7c872dda-e666-4a0c-9a19-6f0383d01a30.png)


```js
var addStrings = function(num1, num2) {
    let result = BigInt(num1) + BigInt(num2)
    return String(result)
};
```
