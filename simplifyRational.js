function simplifyRational(numerator, denominator) {
  if(denominator < 0 && numerator > 0) {
    return [-Math.abs(numerator), Math.abs(denominator)];
  }
  if(numerator === 0) {
    return [0, 1]
  }
  if(numerator === denominator) {
    return [1, 1]
  }
  let division = []
  division.push(numerator);
  division.push(denominator);
  let n = 10
  while(n > 1) {
    if(numerator % n === 0 && denominator % n === 0 ) {
      return [numerator / n, denominator / n];
    }
    n--;
  }
  return [numerator, denominator];
}

simplifyRational(-18, -24)