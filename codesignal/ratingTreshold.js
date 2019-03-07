const add = (a, b) => a + b;

function ratingThreshold(t, r) {
  const results = [];
  const below = [];
  for (let i = 0; i < r.length; i++) {
    results.push([i, r[i].reduce(add) / r[i].length])
  }
  for (let j = 0; j < results.length; j++) {
    if (results[j][1] < t) {
      below.push(results[j][0]);
    }
  }
  return below;
}

// const threshold = 1.3;
// const ratings = [
//   [1, 1, 2],
//   [1, 2, 2],
//   [1, 4]
// ];

const threshold = 3.5;
const ratings = [
  [3, 4],
  [3, 3, 3, 4],
  [4]
];

ratingThreshold(threshold, ratings);