function isPalindrome(inputString) {
  let pointer0 = 0;
  let pointer1 = inputString.length - 1;
  while (pointer1 > pointer0) {
    if (inputString[pointer0] != inputString[pointer1]) {
      return false;
    }
    pointer0++;
    pointer1--;
  }
  return true;
}

console.log(isPalindrome("daddy"));
