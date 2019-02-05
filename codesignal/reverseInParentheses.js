function reverseInParentheses(inputString) {
  const s = inputString.split('');
  for(let i = 0; i < s.length; i++) {
    const reverseString = [];
    if(s[i] === '(') {
      for(let j = i + 1; j !== ')'; j++) {
        if(s[j] === ')') {
          break;
        }
        reverseString.push(s[j])
      }
      s.splice(i, reverseString.length + 2, reverseString.reverse())
    }
  }
  const flatSingle = s => [].concat(...s);
  return flatSingle(s).join('');
}

// reverseInParentheses('foo(bar)baz(blim)')
reverseInParentheses('foo(bar(baz))blim') // "foobazrabblim"



// function reverseInParentheses(inputString) {
//   const s = inputString.split('').join('');
//   const s2 = s.replace(/[\W_]+/g," ").split('');
//   const s3 = s2.join('');
//   const reverseString = s3.match(/\s[a-z ]+\s/).join('').split('');

//   console.log(s3);
  // for(let i = 0; i < s2.length; i ++) {
  //   if(s2[i] === ' ') {
  //     s2.splice(i, reverseString.length, reverseString)
  //     break;
  //   }
  // }
  // const flatSingle = s2 => [].concat(...s2);
  // return flatSingle(s2).join('');
// }

// reverseInParentheses("foo(bar(baz))blim");

// /a\s?fruit/

// .match(/\(([^)]+)\)/)[1]



function reverseInParentheses(inputString) {
  const s = inputString.split('').join('');
  const s2 = s.replace(/[\W_]+/g," ").split('');
  const s3 = s2.join('');
  // const reverseString = s3.match(/\s[a-z ]+\s/).join('').split('');
  let firstIndex = 0;
  let lastIndex = 0;
  for(let i = 0; i < s2.length; i++) {
    if(s2[i] === ' ' && lastIndex === 0) {
      firstIndex = i;
    }
    if(s2[i] === ' ') {
      lastIndex = i;
    }
  }
  return s2.splice(3, 11 - 2)
}

reverseInParentheses("foo(bar(baz))blim"); // "foobazrabblim"



// 5/2/2019

function reverseInParentheses(inputString) {
  let s = inputString.split('');
  let first = 0;
  let last = 0;
  let rs = [];
  const reverseArray = (arr) => {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === '(') {
        first = i;
      }
      if(arr[i] === ')') {
        last = i;
        break;
      }
    }
    console.log(arr)
    rs = arr.splice(first, last - first + 1);
    rs = rs.reverse().join('').replace(/[^\w\s]/gi, '')//.split('');
  }
  reverseArray(s)
  s.splice(first, 0, ...rs);
  s = s.join('').split('');
  first = 0;
  end = 0;
  rs.length = 0;
  if(s.includes('(')) {
    reverseArray(s)
    s.splice(first, 0, ...rs);
    s = s.join('');
  }
  return Array.isArray(s) ? s.join('') : s;
}