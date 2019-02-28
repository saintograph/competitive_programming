function areEquallyStrong(yL, yR, fL, fR) {
  const me = [yL, yR];
  if((yL + yR) === (fL + fR)) {
    if(me.indexOf(fL) === -1 && me.indexOf(fR) === -1) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

