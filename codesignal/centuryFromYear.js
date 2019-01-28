function centuryFromYear(year) {
  year = String(year);
  const first_two = [year[0], year[1]];
  const last_two = [year[year.length - 2], year[year.length -1]];
  if(year.length < 3) {
    return 1
  }
  if(year.length < 4) {
      if(parseInt(last_two.join('')) === 0) {
        return parseInt(first_two[0])
      }
      return (parseInt(first_two[0]) + 1);
  }
  if(parseInt(last_two.join('')) === 0) {
    return parseInt(first_two.join(''))
  }
  return (parseInt(first_two.join('')) + 1);
}
