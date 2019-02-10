function addBorder(picture) {
  const p = picture;

  for(let i = 0; i < p.length; i++) {
    a = p[i].split('');
    a.unshift('*');
    a.push('*');
    p[i] = a.join('');
  }
  p.unshift('*'.repeat(p[0].length))
  p.push('*'.repeat(p[0].length))
  return p;
}

const picture = [
  "abcde", 
  "fghij", 
  "klmno", 
  "pqrst", 
  "uvwxy"
 ]

addBorder(picture);