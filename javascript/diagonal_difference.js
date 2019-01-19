function diagonalDifference(arr) {
  let sum = 0;
  let sum2 = 0;
  let count = 0;
  let array = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i][i];
      count += 1;
      // console.log(count)
  }
  for (let j = count - 1; j >= 0; j--) {
      sum2 += arr[array][j];
      array += 1;
  }
  /*
    Replaced with Math.abs
    sum *= -1;
    sum2 *= -1;
  */
  return Math.abs(sum - sum2);
}

/*
  Custom test case
  9
  6 6 7 -10 9 -3 8 9 -1
  9 7 -10 6 4 1 6 1 1
  -1 -2 4 -6 1 -4 -6 3 9
  -8 7 6 -1 -6 -6 6 -7 2
  -10 -4 9 1 -7 8 -5 3 -5
  -8 -3 -4 2 -3 7 -5 1 -5
  -2 -7 -4 8 3 -1 8 2 3
  -3 4 6 -7 -7 -8 -3 9 -6
  -2 0 5 4 4 4 -3 3 0

*/