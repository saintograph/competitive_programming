function arrayMaximalAdjacentDifference(a) {
  const u = Array.from(new Set(a));
  let largest = 0;
  if (u.length < 2) {
    return 0;
  }
  for (let i = 1; i < u.length; i++) {
    if (i === u.length - 1) {
      let res1 = 0;
      res1 = u[i] - u[i - 1];
      largest = largest > res1 ? largest : res1;
      break;
    }
    let res1 = 0;
    let res2 = 0;
    let res3 = 0;
    res1 = u[i] - u[i - 1];
    res2 = u[i] - u[i + 1];
    res3 = res1 > res2 ? res1 : res2;
    largest = largest > res3 ? largest : res3;
  }
  return largest;
}
