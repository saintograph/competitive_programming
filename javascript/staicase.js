function staircase(n) {
  let x = 1;
  while (x !== n + 1) {
      const space = ' ';
      const hash = '#';
      console.log(space.repeat(n - x) + hash.repeat(x))
      x += 1;
  }
}