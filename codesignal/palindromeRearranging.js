/* 
  Palindromes don't have letters with an odd count more than once.
  Example: 'abbcabb' is a palindrome but 'abbvcabb' is not.
*/

function palindromeRearranging(a) {
  const dict = {};
  let odds = 0;
  for(let i = 0; i < a.length; i++) {
    if(!dict[a[i]]) {
      dict[a[i]] = 1;
    } else {
      dict[a[i]] += 1;
    }
  }
  for(let key in dict) {
    if(dict[key] % 2 !== 0) {
      odds += 1;
    }
    if(odds > 1) {
      return false
    } 
  }
  return true
}