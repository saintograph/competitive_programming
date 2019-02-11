function alternatingSums(a) {
  let even = [];
  let odd = [];
  const add = (a, b) => a + b;
  for(let i = 0; i < a.length; i++) {
    if(i === 0) {
      even.push(a[0]);
    } else if(i % 2 === 0) {
      even.push(a[i]);
    } else {
      odd.push(a[i])
    }
  }
  return [even.length === 0 ? 0 : even.reduce(add), odd.length === 0 ? 0 : odd.reduce(add)];
}

// alternatingSums([50, 60, 60, 45, 70]);
alternatingSums([80, 0])