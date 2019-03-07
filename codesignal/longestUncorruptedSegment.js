// unoptimized

function longestUncorruptedSegment(s, d) {
  let length = 0;
  let res = [];
  let temp = [];
  if(s.length < 2) {
    return [0, 0];
  }
  for(let i = 0; i < s.length; i++) {
    if(s[i] !== d[i]) {
      s[i] = ' ';
    }
  }
  if(s === ' '.repeat(s.length)) {
    return [0, 0];
  }
  for(let j = 0; j < s.length; j++) {
    if(s[j] === ' ') {
      if(temp.length > length) {
        length = temp.length;
        res = [];
        res.push(...temp)
        temp = [];
      }
    } else if(s.indexOf(s[j]) === s.length - 1) {
      if(temp.length > length) {
        if(s[j] !== ' ') {
          temp.push(s[j])
        }
        length = temp.length;
        res = [];
        res.push(...temp)
        temp = [];
      }
    } else {
      temp.push(s[j]);
    }
  }
  return [length, d.indexOf(res[0]) === -1 ? 0 : d.indexOf(res[0])]
};

// const sourceArray = [33531593, 96933415, 28506400, 39457872, 29684716, 86010806]
// const destinationArray = [33531593, 96913415, 28506400, 39457872, 29684716, 86010806]

// const sourceArray = [99919628, 77504204, 18846830, 86785029, 86230362, 96953294, 53208680, 95327090, 68996760, 26366538, 90490275, 62583792, 87514087, 96921389, 21309822]
// const destinationArray = [99919628, 77503204, 18546830, 86785029, 86230362, 96953264, 53208680, 95327090, 68996760, 26366538, 90420275, 62583792, 87514087, 39692139, 21303822]

const sourceArray = [20800440, 98256958, 64277103, 40475664, 98589505, 31621824, 84322264, 58283379, 15631261, 35464021]
const destinationArray = [20800440, 95256958, 64276103, 40475664, 98589505, 31621824, 84322264, 58283379, 15631261, 35464021] // [7, 3]

longestUncorruptedSegment(sourceArray, destinationArray); // [4, 2]