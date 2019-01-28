function adjacentElementsProduct(inputArray) {
  let sum = 0;
  let i = 0;

  while(i !== inputArray.length - 1) {
    if(i === 0) {
      sum = inputArray[0] * inputArray[1];
    }
    if(i === inputArray.length) {
      sum = sum > inputArray[i - 1] * inputArray[i - 2] ? sum : inputArray[i - 1] * inputArray[i - 2]
      return;
    }
    sum = sum > inputArray[i] * inputArray[i - 1] ? sum : inputArray[i] * inputArray[i - 1];
    sum = sum > inputArray[i] * inputArray[i + 1] ? sum : inputArray[i] * inputArray[i + 1];
    i++;
  }
  return sum;
}