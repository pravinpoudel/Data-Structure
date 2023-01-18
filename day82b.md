https://leetcode.com/problems/search-a-2d-matrix-ii/description/

![image](https://user-images.githubusercontent.com/11494733/213125197-18fc9528-ec8a-4c3b-9c28-ce0c9de75723.png)


```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix[0][0]>target){
        return false
    }
    const rows = matrix.length
    const cols = matrix[0].length
    const visited = Array(rows).fill(null).map((element)=> Array(cols).fill(false))
    let queue = []
    queue.push([0,0])
    while(queue.length>0){
        let [x, y] = queue.shift()
        visited[x][y] = true
        if(matrix[x][y] == target){
            return true
        }
        if(matrix[x][y]>target){
            // return false;
            direction = [[x-1, y], [x, y-1]]
        }
        else{
            direction = [[x+1,y],[x, y+1]]
        }
        for(let i=0, _length = direction.length; i<_length; i++){
            if(direction[i][0]>=0 && direction[i][1] >=0 && direction[i][0]<=(rows-1) && direction[i][1]<=(cols-1)){
                if(!visited[direction[i][0]][direction[i][1]]){
                    visited[direction[i][0]][direction[i][1]] = true
                    queue.push(direction[i])
                }
            }
        }
    }
    return false
};```
