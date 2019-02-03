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