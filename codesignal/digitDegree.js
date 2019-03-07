const add = (a, b) => parseInt(a) + parseInt(b);
function digitDegree(n) {
  n = String(n)
  let times = 0;
  if(n.length === 1) {
    return times;
  }
  while(n.length !== 1) {
    n = String(n.split('').reduce(add));
    times += 1;
  }
  return times;
}

digitDegree(99)