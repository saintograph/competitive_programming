function houseRobber(a) {
  let result = [];
  if(a.length < 1) {
    return 0;
  } else if(a.length === 1) {
    return a[0];
  };
  result[0] = a[0];
  for(let i = 1; i < a.length; i++) {
    console.log(result)
    result[i] = Math.max(result[i -1], a[i])
    if (i - 2 >= 0) {
      result[i] = Math.max(result[i], a[i] + result[i - 2]);
    }
  }
  return result[a.length - 1];
}