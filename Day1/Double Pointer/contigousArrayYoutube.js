function mappedArray(arrayInput) {
  let equivalentArray = [];
  for (let i = 0, length = arrayInput.length; i < length; i++) {
    if (arrayInput[i] == 0) {
      equivalentArray[i] = -1;
    } else {
      equivalentArray[i] = 1;
    }
  }
  return equivalentArray;
}

//ok we cant use array but need to use hashmap because we need to check if it is repetitive
function findSubArray(equivalentArray) {
  let total = 0;
  const sumMap = new Map();
  let arrayStart = 0;
  let arrayEnd = 0;
  let subArrayLength = 0;
  for (let i = 0, length = equivalentArray.length; i < length; i++) {
    total += equivalentArray[i];
    // console.log(i, sumMap.has(total));
    if (total == 0) {
      arrayEnd = i;
      subArrayLength = i + 1;
      sumMap.set(total, i);
    } else if (sumMap.has(total)) {
      if (i - sumMap.get(total) + 1 > subArrayLength) {
        arrayStart = sumMap.get(total) + 1;
        arrayEnd = i;
        subArrayLength = i - sumMap.get(total) + 1;
        console.log(i, arrayStart, arrayEnd, subArrayLength);
      }
    } else {
      sumMap.set(total, i);
      console.log(sumMap);
    }
  }
  return [arrayStart, arrayEnd];
}

//rememver object is also similar to hash map in js but it does not always maintain the order
// like most browser iterate object properties as
// integer keys in ascending order (and also the string like "1" which parses as a integer) and string keys and symbol names in insertion order

// but map maintain the insertion order
function findContArray(arrayInput) {
  let equivalentArray = mappedArray(arrayInput);
  let sumMap = findSubArray(equivalentArray);
  console.log(sumMap);
}

findContArray([0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);
