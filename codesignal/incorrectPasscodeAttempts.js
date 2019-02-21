/*
  Lock account if more than 10 incorrect attempts made to login
*/

function incorrectPasscodeAttempts(p, a) {
  let count = 0;
  for(let i = 0; i < a.length; i++) {
    if(a[i] === p) {
      count = 0;
    } else {
      count += 1;
    }
    if(count > 9) {
      return true;
    }
  };
  return false;
};

const passcode = '1111';
const attempts = ["1111", "4444",
  "9999", "3333",
  "8888", "2222",
  "7777", "0000",
  "6666", "7285",
  "5555", "1111"];
  