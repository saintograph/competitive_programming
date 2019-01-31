function almostIncreasingSequence(sequence) {
  let removals = 0;
  let before = 0;
  if(sequence[sequence.length - 1] < sequence[sequence.length - 2]) {
    sequence.splice([sequence.length - 1], 1);
    removals += 1;
  }
  for(let i = 1; i < sequence.length; i++) {
    if(sequence[i] <= sequence[i - 1] ) {
      before = sequence[i - 2]
      if(sequence[i] === before) {
        sequence.splice([i], 1);
      } else {
        sequence.splice([i - 1], 1);
      }
      removals += 1;
      i = 0;
      if(removals > 1) {
        return false;
      }
    }
  }
  return true;
}

almostIncreasingSequence([1, 2, 3, 4, 3, 6]); // true
// almostIncreasingSequence([3, 5, 67, 98, 3]);