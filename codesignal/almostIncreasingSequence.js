// almost! 17/19 tests passed

function almostIncreasingSequence(sequence) {
  let swaps = 0;
  let previous = 0;
  if(sequence.length <= 3) {
    return true;
  }
  const swap = (array, index1, index2) => {
    const staticIndex = array[index1];
    array[index1] = array[index2];
    array[index2] = staticIndex;
    swaps += 1
  }
  if(Math.max.apply(null, sequence) === sequence[0]) {
    swap(sequence, 0, sequence.length)
  }
  for(let i = 1; i <= sequence.length; i++) {
    if(sequence[i] <= sequence[i - 1]) {
      previous = sequence[i - 1];
      swap(sequence, i, i - 1);
    }
  }
  if(swaps > 1) {
    return false;
  }
  return true;
}


// almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15]) //false
// almostIncreasingSequence([1, 3, 2]) // true
// almostIncreasingSequence([0, -2, 5, 6]) //true
// almostIncreasingSequence([40, 50, 60, 10, 20, 30]) //false
// almostIncreasingSequence([10, 1, 2, 3, 4, 5]) //true
// almostIncreasingSequence([1, 1]) // true
// almostIncreasingSequence([1, 2, 5, 3, 5]) // true
// almostIncreasingSequence([1, 3, 2, 1]) // false
// almostIncreasingSequence([1, 2, 1, 2]) // false
// almostIncreasingSequence([1, 2, 5, 3, 5]) // true
almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]) // true