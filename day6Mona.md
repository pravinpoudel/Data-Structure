https://leetcode.com/problems/minimum-time-to-make-rope-colorful/description/

![image](https://user-images.githubusercontent.com/11494733/210047637-ef37d209-6ac7-4bf1-9a38-9f9254c59fa7.png)

```javascript
/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let time = neededTime[0]
    let color = colors[0]
    let totalTime = 0
    for(let i=1,_length = colors.length; i<_length; i++){
        if(colors[i] == color){
            undeleted = Math.max(neededTime[i], time)
            time = Math.min(neededTime[i], time)
            totalTime += time
            time = undeleted
        }
        else{
            time = neededTime[i]
            color = colors[i]
        }
    }
    return totalTime;
};
```
### by two pointer method

```javascript
var minCost = function(colors, neededTime) {
    let start = 0
    let end = 1
    let totalTime = 0
    while(end<colors.length){
        if(colors[start] == colors[end]){
            if(neededTime[start] > neededTime[end]){
                totalTime += neededTime[end]
                end += 1 
            }
            else{
                totalTime += neededTime[start]
                start = end;
                end = start + 1
            }
        }
        else{
            start = end;
            end = start + 1
        }
    }
    return totalTime
};
```
