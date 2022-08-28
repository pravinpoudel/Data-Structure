// {
//      int x = a * b * c;
//     return(x);
//  }

// Example1:
// --------------------------------------------------------------------------------------------------------------------
// In the above expression, a, b, c, and x all are integer types. Each of them takes 4 bytes. Now we can calculate the total memory. This will be…

// (4(4) + 4) = 20 bytes.
// Additional 4 bytes are for the return value.

// Here we need a fixed amount of memory for all the input. So this type of complexity is called Constant Space Complexity.

// Example2:

//  n is the length of array a[]
// int sum(int arr[], int n)
// {
// int sum = 0;  // 4 bytes for sum
// for(int i = 0; i < n; i++) // 4 bytes for i
// {
//     sum  = sum + arr[i];
// }
// return(sum);
// }

// Total memory required here is 4*n ( n is length of array) - size of array, 4*4 ( 4 bytes each for sum, n, i and return type)
//This is called Linear Space Complexity

// Space Complexity Cheat Sheet for Algorithms
// Bubble Sort: O(1)
// Selection Sort: O(1)
// Insertion Sort: O(1)
// Merge Sort: O(n)
// Quick Sort: O(n)
// Heap Sort: O(1)
// Radix Sort: O(n+k) where k — range of array elements.
