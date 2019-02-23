/*
  You are climbing a staircase that has n steps. 
  You can take the steps either 1 or 2 at a time. 
  Calculate how many distinct ways you can climb to the top of the staircase.
*/

function climbingStairs(n, memo) { // Memoized Fibonacci sequence
  memo = memo || {};
  if(n <= 3) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }
  return memo[n] = climbingStairs(n - 1, memo) + climbingStairs(n - 2, memo);
};
