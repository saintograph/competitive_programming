function shapeArea(n) {
  let finalSum = 5;
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 5;
  }
  for(let i = 3; i <= n; i++) {
    const multiple = (i - 1) * 4;
    finalSum = finalSum + multiple;
  }
  return finalSum;
}