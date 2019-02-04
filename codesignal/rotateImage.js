function rotateImage(a) {
  let length = a.length;
  const rotated = Array.from(Array(a.length), _ => Array(a.length).fill(0));
  for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < a[i].length; j++) {
      rotated[j][length - 1] = a[i][j];
    }
    length -= 1;
  }
  return rotated
}