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
    rs = rs.reverse().join('').replace(/[^\w\s]/gi, '')
  }
  while(s.includes('(')) {
    first = 0;
    end = 0;
    rs.length = 0;
    reverseArray(s)
    s.splice(first, 0, ...rs);
  }
  s = s.join('');
  return Array.isArray(s) ? s.join('') : s;
}



reverseInParentheses("foo(bar(baz(qux)))blim")