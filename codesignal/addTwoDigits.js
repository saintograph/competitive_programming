function addTwoDigits(n) {
  n = String(n).split('');
  return parseInt(n[0]) + parseInt(n[1]);
}

addTwoDigits(29)