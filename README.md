# Data-Structure
## 1. 

for a problem like finding finding a number of pair that give sum k, here first thing to note is that it is asking for pairs, not consecutive array.

and, when you have to find a pair for a job that mean for every element you have to find if there is another element that can make pair with this element.

Suppose if the target is sum = 11 and you start traversing each element in array, 

you need to check if there is another element in array that is:

  <i>sum - element[i] </i>
  
for checking, if you check in array, it might be expensive so put the array in hash map ( you might need to preprocess the array like putting all the common elmenet in one and value as their count)

Now the time complexity is O(n) which is solved so pair wise solution logic is checking if you have another element.

Sliding window does not work here because this is not consective array problem.

But the space complexity is still O(n) which we want in O(1)
