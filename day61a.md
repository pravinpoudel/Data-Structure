![array_big_o](https://user-images.githubusercontent.com/11494733/209091859-fdb12352-588a-47cc-9550-4b1674612f0b.png)


## Insertion and Removal: It depends - 

```
let names = ["Michael", "Melissa", "Andrea"]
```
if you are adding new name, let's say, <b>"Raj"</b>, then it is constant time <b>O(1)</b>

But when we want to add at the beginning of the array, Problem comes there and it takes O(n) times because we have to do something once roughly for each elements

and it does not mean there is one opreation for each element, it can be 10 operations in each element so can be O(10n) or O(2n)

same goes for removing from the beginning !! 

-----------------------------------------------------------------------------------------------------------------------------------------------------

<i> so push and pop are always faster than shift and unshift except in empty array</i>

<i> search take O(n) mean in a sense that if we want to find something, we potentially need to go to each element in an array so it is O(n) </i>

------------------------------------------------------------------------------------------------------------------------------------------------------


![array_big_o2](https://user-images.githubusercontent.com/11494733/209094267-b24e2a10-eb5d-49d3-8035-c58785ec84b0.png)


splice - change the content of array 
```
Array.splice( index_to_insert_at, number of element to remove from that index, thing to add)
```
slice is a shallow copy with out changing the array

Remember that slice syntax is 
```javascript
slice(source, destination)  
```

but, 

```
but it does not include the end element at destination so it only return array from source index to (destinaton-1) index
```
