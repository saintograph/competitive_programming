function arrayChange(a) {
  let sum = 0;
  for(let i = 1; i < a.length; i++) {
    if(a[i] <= a[i - 1]) {
      const original = a[i];
      a[i] = a[i - 1] + 1;
      sum += (a[i] - original)
    }
  }
  return sum;
}