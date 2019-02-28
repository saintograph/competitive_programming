function proCategorization(pros, pref) {
  let jobs = new Set;
  const dict = {};
  const final = [];
  for(let i = 0; i < pref.length; i++) {
    for(let j = 0; j < pref[i].length; j++) {
      jobs.add(pref[i][j])
    }
  }
  jobs = Array.from(jobs).sort();
  jobs.forEach(x => {
    dict[x] = [];
  })
  for(let i = 0; i < pref.length; i++) {
    for(let j = 0; j < pref[i].length; j++) {
      dict[pref[i][j]].push(pros[i])
    }
  }
  for(let key in dict) {
    final.push([[key], [...dict[key]]])
  }
  return final;
}