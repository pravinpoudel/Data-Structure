Problem:

Find number of pairs that can make sum k

```javascript
let a = [1, 3, 3, 5, 5, 5, 7, 9]
let k = 10

// the edge condition for the two pointer method for finding pairs making the sum is same element recurrent !! 
// since this element is sorted array, we can put two pointer in two end i.e start at element 0 and end pointer in a.length-1

let start = 0;
let end = a.length - 1;
let count = 0
for (let i = 0; i < a.length; i++) {
  if (start >= end) {
    break;
  }
  let sum = a[start] + a[end]
  if (sum < k) {
    start++
  } else if (sum > k) {
    end--
  } else {

    // this is a case when there is encounter of something like 5, 5, 5, 5 and required sum target is also 10

    if (a[start] == a[end]) {
      let pastStartVal = a[start]
      start++
      while (a[start] == pastStartVal) {
        start++
        count++
      }
    } else {
      let startFound = a[start]
      start++
      let startCommonCount = 1
      let endCommonCount = 1
      let endFound = a[end]


      //if there is repeating number case 

      while (startFound == a[start]) {
        startCommonCount++;
        start++
      }

      let nextEnd = a[end - 1]
      while (endFound == nextEnd) {
        endCommonCount++;
        end--;
        endCommonCount++
        nextEnd = a[end]
      }
      count += endCommonCount * startCommonCount
    }
  }
}

console.log(count)

```
