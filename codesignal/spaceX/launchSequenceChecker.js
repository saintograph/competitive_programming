function launchSequenceChecker(sy, st) {
  if (sy.length !== st.length) {
    return false;
  }
  const dict = {};
  const dup = {};
  for (let i = 0; i < sy.length; i++) {
    if (!dict[sy[i]]) {
      dict[sy[i]] = [st[i]];
    } else {
      dict[sy[i]].push(st[i]);
    }
  }
  for (let key in dict) {
    for (let j = 0; j < dict[key].length; j++) {
      if (dict[key][j] >= dict[key][j + 1]) {
        return false;
      }
    }
  }
  return true;
}
