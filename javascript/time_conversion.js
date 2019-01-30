function timeConversion(s) {
  /*
   * Write your code here.
   */
  // 11: 05: 45PM
  const convert = () => {
      if (parseInt(s[0]) !== 0 && parseInt(s[1]) < 3) {
          return 12 + parseInt((s[0] + s[1]))
      } else { 
          return 12 + (parseInt(s[0] === 0 ? null : s[0]) + parseInt(s[1]))
      }
  }
  console.log(convert() + s.slice(2, s.length - 2))
  return convert() + s.slice(2, s.length - 2)
}