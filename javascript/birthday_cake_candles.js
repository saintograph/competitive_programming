// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  let count = 0
  const largest_number = Math.max(...ar);
  for (let i = 0; i <= ar.length; i++) {
      if (ar[i] === largest_number) {
          count += 1;
      }
  }
  return count;
}
