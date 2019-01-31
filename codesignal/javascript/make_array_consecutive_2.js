// use quicksort over Array.prototype.sort

function makeArrayConsecutive2(statues) {
  const newStatues = [];
  function quick_Sort(origArray) {
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

      return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
    }
  }
  if(statues.length === 0) {
    return;
  }
  statues = quick_Sort(statues);
  let i = 0;
  for(let i = 0; i < statues.length - 1; i++) {
    if(statues[i + 1] !== (statues[i] + 1)) {
      newStatues.push(statues[i] + 1);
      statues.splice(i + 1, 0, statues[i] + 1)
    }
  }
  return newStatues.length
}

makeArrayConsecutive2([6, 2, 3, 8]);