function commonCharacterCount(s1, s2) {
  s1 = s1.split('');
  s2 = s2.split('');
  const s1_length = s1.length;
  const s2_length = s2.length;
  const short = s1_length > s2_length ? s2 : s1;
  const long = s1_length > s2_length ? s1 : s2;
  let splices = 0;
  for(let i = 0; i < short.length; i++) {
      const index = long.indexOf(short[i]);
      if(index !== -1) {
        long.splice(index, 1);
        splices += 1;
      }
  }
  return splices;
}

commonCharacterCount("aabcc", "adcaa");