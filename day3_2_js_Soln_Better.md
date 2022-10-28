
![image](https://user-images.githubusercontent.com/11494733/198565935-1b78fbb2-cc41-4f3c-9309-f66ecbd93ede.png)


```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let _length1 = num1.length
    let _length2 = num2.length
    carry = 0
    result = ""
    for(let i=_length1-1, j = _length2 -1; (i>=0 || j>=0);){
        let value1 = i>=0? +num1[i] : 0 
        let value2 = j>=0? +num2[j] : 0
        let sum = value1 + value2 + carry
        carry = 0
        if(sum>9){
            carry = 1
            sum = sum-10
        }
        result = sum + result
        i--;
        j--;
    }
    if(carry == 1){
        result = 1+ result
    }
    return result
    
};
```

![image](https://user-images.githubusercontent.com/11494733/198566001-4cc84a07-3fce-4328-985f-d4e07a570a07.png)

