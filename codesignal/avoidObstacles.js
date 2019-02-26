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

function avoidObstacles(a) {
  a = quickSort(a);
  let l =  0;
  if(a[0] < 10) {
    l =  a[0] + 1;
    for(let i = 0; i < a.length; i++) {
      if(a[i] % l === 0) {
        l += 1;
        i = 0;
      }
    }
  } else {
    l =  1;
    for(let i = -1; i < a.length; i++) {
      if(a[i] % l === 0) {
        l += 1;
        i = -1;
      }
    }
  }
  return l;
}

// console.log(1000 % 2)
// avoidObstacles([1000, 999]); // 6
// avoidObstacles([3, 5, 6, 7, 9]); // 4
// avoidObstacles([1, 2, 4, 6, 10 ]); // 7
// avoidObstacles([5, 3, 6, 7, 9]) // 4
// avoidObstacles([2, 3]); // 4
// avoidObstacles([19, 32, 11, 23]); // 3