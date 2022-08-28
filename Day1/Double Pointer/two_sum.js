// in C/C++ pointer is a variable that store the memory address of the variable so if the system is 32 bits, it is 32 bits and if system is 64 bits its 64 bits irrespective of the type
// then why do we have int *a or char *b i.e pointer a of type int and pointer b of type char? Its to help on reading the data from that memory so it will decide how many bytes to read from memory

// problem:

// you are tasked with figuring out the part of elemetns where arr[p] + arr[q] add upto a certian number

//  brute force solution is to compare each element with every other number but thats a time complexity of O(n^2)

// so we optimize it by identifying the indices pointer_one and pointer_two whose values sum to the integer target

let arr = [1, 2, 3, 4, 5];

let targetValue = 11;
//  we want they add up to 6
function two_sum() {
  // make two pointer
  let pointer_one = 0;
  let pointer_two = arr.length - 1; // helps to get the last index possible in an array

  // in two pointer method it is not always the case where there are two pointer one points to the first element of array and another points to the last element

  // this wont always be the case with this technique (like sliding window concept which uses two pointer but have them move in a different direction). For our current purposes, it is more efficient to start wide, and iteratively narrow in
  // (particularly if the array is sorted)

  //iteration start and condition to stop is when they meet

  while (pointer_one < pointer_two) {
    let sumofNumber = arr[pointer_one] + arr[pointer_two];
    if (sumofNumber == targetValue) {
      return true;
    } else if (sumofNumber < targetValue) {
      pointer_one++;
    } else {
      pointer_two--;
    }
  }
  //don't forget to return false
  return false;
}

console.log(two_sum());
