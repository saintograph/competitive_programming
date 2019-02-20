function quickSort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}

function launchSequenceChecker(sy, st) {
  if (sy.length !== st.length) {
    return false;
  }
  const dict = {};
  const dup = {};
  for (let i = 0; i < sy.length; i++) {
    if (!dict[sy[i]]) {
      dict[sy[i]] = [st[i]];
      dup[sy[i]] = [st[i]];
    } else {
      dict[sy[i]].push(st[i]);
      dup[sy[i]].push(st[i]);
    }
  }
  for (let key in dup) {
    dup[key] = quickSort(dup[key]);
    if (dup[key] !== dict[key]) {
      return false;
    }
    for (let j = 0; j < dup[key].length; j++) {
      if (dup[key][j] == dup[key][j + 1]) {
        return false;
      }
    }
  }
  return true;
}