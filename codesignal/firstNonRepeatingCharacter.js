function firstNotRepeatingCharacter(s) {
  const o = s.split('');
  const dict = new Set(s);
  const letter = [];
  dict.forEach(x => {
    const indices = o.map((e, i) => e === x ? i : '').filter(String)
    if(indices.length === 1) {
      letter.push(o[indices]);
    }
  })
  return letter.length === 0 ? '_' : letter[0];
}