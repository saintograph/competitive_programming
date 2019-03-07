<<<<<<< HEAD
/* 
  Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! 
  You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.
  The pixels in the input image are represented as integers. 
  The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average 
  value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.
  Return the blurred image as an integer, with the fractions rounded down.
*/

const add = (a, b) => a + b;
const box = (a, i, j) => {
  const res = [];
  // top
  res.push(a[i - 1][j - 1], a[i - 1][j], a[i - 1][j + 1])
  // current
  res.push(a[i][j - 1], a[i][j], a[i][j + 1])
  // bottom
  res.push(a[i + 1][j - 1], a[i + 1][j], a[i + 1][j + 1])
  return Math.floor(res.reduce(add) / 9);
}

function boxBlur(im) {
  let result = [];
  for (let i = 1; i <= im.length - 2; i++) {
    result.push([])
    for (let j = 1; j <= im[i].length - 2; j++) {
      result[i - 1].push(box(im, i, j));
    }
  }
  return result;
};


const image = [
  [36, 0, 18, 9],
  [27, 54, 9, 0],
  [81, 63, 72, 45]
]

boxBlur(image); // [[40, 30]]
