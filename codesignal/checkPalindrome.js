function checkPalindrome(inputString) {
  splitInput = inputString.split('')
  splitString = inputString.split('')
  if(inputString.length === 1) {
    return true;
  }
  return splitString.reverse().join('') == splitInput.join('')
}