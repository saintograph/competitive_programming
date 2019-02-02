function sortByHeight(a) {
  const a2 = [];
  const sortBy = (c, d) => c - d;
  if(a.length < 2) {
    return a;
  }
  for(let i = 0; i < a.length; i++) {
    if(a[i] !== -1) {
      a2.push(a[i]);
    }
  }
  a2 = a2.sort(sortBy);
  for(let i = 0; i < a.length; i++) {
    if(a[i] !== -1) {
      const popped = a2.shift()
      a[i] = popped;
    }
  }
  return a;
};


// sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])
// sortByHeight([3, 2, -1, 4, 3, -1]);
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) //[-1, 150, 160, 170, -1, -1, 180, 190]