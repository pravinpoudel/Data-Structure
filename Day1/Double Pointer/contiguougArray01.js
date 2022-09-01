// largest contigous array of equal 0 and 1

function largetContiguousArray(arrayInput) {
  let firstPointer = 0;
  let secondPointer = 0;
  let arrayLength = arrayInput.length;
  let arrayIndex0 = 0;
  let arrayIndex1 = 0;
  let zeroCount = 0;
  let oneCount = 0;
  while (secondPointer < arrayLength) {
    if (arrayInput[secondPointer] == 0) {
      zeroCount++;
    } else {
      oneCount++;
    }
    if (zeroCount == oneCount) {
      console.log("equal found");
      arrayIndex0 = firstPointer;
      arrayIndex1 = secondPointer;
    }
    if (Math.abs(zeroCount - oneCount) > arrayLength - secondPointer) {
      if (arrayInput[firstPointer] == 0) {
        zeroCount--;
      } else {
        oneCount--;
      }
      firstPointer++;
    }
    secondPointer++;
  }
  return [arrayIndex0, arrayIndex1];
}

console.log(largetContiguousArray([1, 1, 1, 0, 1, 0, 1, 0]));
