function longestUncorruptedSegment(a, b) {
  let start = 0;
  let length = 0;
  const uncorrupted = [];
  function* generator(i) {
    let index = 1;
    while (index < index + 1) {
      yield index++;
    }
  }
  const gen = generator(0);

  if(a.length === 1) {
    return [0, 0];
  }
  if(a[0] !== b[0]) {
    return [0, 0]
  }
  let idx = 0;
  for(let i = 0; i < a.length; i++) {
    if(a[i] !== b[i]) {
      idx = gen.next().value;
    }
    if(a[i] === b[i]) {
      uncorrupted[idx] = Array.isArray(uncorrupted[idx])? uncorrupted[idx] : [];
      uncorrupted[idx].push(a[i])
    }
  }
  const longest = () => {
    const clean = uncorrupted.filter(x => x !== null);
    const longest = clean.map(function(a){return a.length;}).indexOf(Math.max.apply(Math, clean.map(function(a){return a.length;})))
    console.log(clean)
    console.log(clean[longest])
    let long = 0;
    for(let j = 0; j < clean.length; j ++) {
      long = long < clean[j].length ? clean[j].length : long;
    }
    // return long;
    return [long, a.indexOf(clean[longest][0])];
  }
  // [length, starting index]
  // return [longest(), start];
  return longest()
}

// const a = [33531593, 96933415, 28506400, 39457872, 29684716, 86010806];
// const b = [33531593, 96913415, 28506400, 39457872, 29684716, 86010806];
const a = [92988800, 80253955, 17396563, 91682092, 77708269, 97587946, 23889892, 20661856, 21013095, 92028000, 17562863, 86804822, 17819093, 97941923, 64955308]; 
const b = [92988800, 80253955, 17396563, 91682092, 77708229, 97587946, 23889892, 20661866, 21013095, 92928000, 17962863, 86804822, 14819093, 97241923, 62955308];
// const a = [2, 3, 5, 7, 55, 1];
// const b = [2, 3, 5, 6, 55, 0]
longestUncorruptedSegment(a, b) // [4, 2]