function isIPv4Address(s) {
  const a = s.split('.');
  if(a.length < 4 || a.length > 4) {
    return false;
  }
  for(let i = 0; i < a.length; i++) {
    if(a[i] > 255 || a[i] < 0 || a[i] === '') {
      return false
    }
    if(!(/^\d+$/.test(a[i]))) { // check for characters which are not digits
      return false;
    }
  }
  return true;
}

