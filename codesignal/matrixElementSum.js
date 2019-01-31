function matrixElementsSum(matrix) {
  let roomCount = [];
  const hauntedColumn = Array(matrix[0].length).fill(1)
  const include = (arr, obj) => (arr.indexOf(obj) !== -1);
  const add = (a, b) => a + b;
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(i === 0) {
        if(matrix[i][j] === 0) {
          hauntedColumn[j] = 0;
        } else {
          roomCount.push(matrix[i][j]);
        }
      }
      if(i > 0) {
        if(matrix[i][j] === 0) {
          hauntedColumn[j] = 0;
        }
        if(matrix[i][j] !== 0 && hauntedColumn[j] !== 0) {
          roomCount.push(matrix[i][j]);
        }
      }
    }
  }
  if(roomCount.length === 0) {
    return 0;
  }
  return roomCount.reduce(add);
}