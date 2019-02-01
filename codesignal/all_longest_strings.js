function allLongestStrings(inputArray) {
  let longest_number = 0;
  const longest_array = [];
  const final_array = [];
  inputArray.forEach(x => longest_array.push(x.length))
  longest_number = Math.max.apply(null, longest_array);
  for(let i = 0; i < inputArray.length; i ++) {
      if(inputArray[i].length === longest_number) {
          final_array.push(inputArray[i])
      }
  }
  return final_array;
}
