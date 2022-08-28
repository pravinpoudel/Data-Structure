//Given an array nums containing n+1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist
//Assume that there is only one duplicate number, find the duplicate one

//input: [1, 3, 4, 2, 2]
//output: 2

// explanation of problem:

// here in question it is explicitly stated that the element of array will be integer between 1 and n but it never said that it will be every number
// the element will be between 1 and n so every element whatever it is between 1 and n.

// Note: You must not modify the array i.e array is read only
// You mist use only constant O(1) extra space
// Your runtime complexity should be less than O(n^2)
// There is only one duplicate number in the array but it could be repeated more than once

// if there was not constraint on O(1) space complexity, i would store all the occurence in hash map and check if it is already there or not

function duplicate() {
  const elementOccurenceMap = new Map();
  for (let i = 0, inputLength = input.length; i < length; i++) {
    if (elementOccurenceMap.has(input[i])) {
      return input[i];
    } else {
      elementOccurenceMap[input[i]] = 0;
    }
  }
}
// but required time complexity is O(1)
// O(1) complexity: we consider the constant space complexity when the program doesnot contain any loop, recursive function,
// or call to any other function

// Space Complexity = Auxiliary Space + Input space

// {
//     int x = a * b * c;
//     return(x);
//  }
