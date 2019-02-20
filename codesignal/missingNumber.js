function quickSort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		const left = [];
		const right = [];
		const newArray = [];
		const pivot = origArray.pop();
		const length = origArray.length;

		for (let i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
}

function missingNumber(arr) {
  const a = quickSort(arr);
  if(a[0] !== 0) {
    return 0;
  }
  for(let i = 0; i < a.length; i++) {
    if(a[i + 1] !== (a[i] + 1)) {
      return a[i] + 1;
    }
  }
  return a[a.length - 1] + 1;
}

missingNumber([0, 1]); // 2