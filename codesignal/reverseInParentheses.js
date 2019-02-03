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