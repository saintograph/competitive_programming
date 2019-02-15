function areSimilar(a, b) {
  const set_a = new Set(a);
  const set_b = new Set(b);
  const union = new Set([...a, ...b])
  const add = (a, b) => a + b;
  if(a.reduce(add) !== b.reduce(add)) {
    return false;
  }
  if(a.length !== b.length) {
    return false;
  }
  if(set_b.size !== union.size) {
    return false;
  }
  let count = 0;
  for(let i = 0; i < b.length; i++) {
    if(a[i] !== b[i]) {
      count += 1;
    }
    if(count > 2) {
      return false;
    }
  }
  return true;
}