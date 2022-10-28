[Question](https://leetcode.com/problems/add-strings/) <br>
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.<hr /> 


![image](https://user-images.githubusercontent.com/11494733/198558365-7c872dda-e666-4a0c-9a19-6f0383d01a30.png)


```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let _length1 = num1.length
    let _length2 = num2.length
    
    if(_length1>_length2){
        let padString = new Array(_length1 - _length2 +1).join("0")
         num2 = padString + num2
    }
    
    if(_length2 > _length1){
        let padString = new Array(_length2 - _length1+1).join("0")
        num1 = padString + num1
    }
    
    _length = num1.length
    
    carry = 0
    result = ""
    for(let i=_length-1; i>=0; i--){
        let sum = (+num1[i]) + (+num2[i]) + carry
        carry = 0
        if(sum>9){
            carry = 1
            sum = sum-10
        }
        result = sum + result
    }
    if(carry == 1){
        result = 1+ result
    }
    return result
    
};
```
