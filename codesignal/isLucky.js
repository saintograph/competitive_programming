function isLucky(n) {
  n = String(n).split('');
  const half = n.length / 2;
  const add = (a, b) => parseInt(a) + parseInt(b);
  const first_half = n.splice(0, half);
  return first_half.reduce(add) == n.reduce(add);
}