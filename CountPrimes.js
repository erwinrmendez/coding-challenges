/*
Source: [LeetCode](https://leetcode.com/problems/count-primes/)

Description:
Given an integer n, return the number of prime numbers that are strictly less than n.

Solution:
I keep track of the prime numbers up to n in an array. To check if the number is prime, I verify that is not divisible by any other prime in the array and only
check divisibility to the squared root of the current number. At the end, the length of the array of primes is returned.
*/

function countPrimes(n) {
  let primes = [];

  for (i = 2; i < n; i++) {
    if (i === 2 || i === 3) {
      primes.push(i);
      continue;
    }

    if (i % 2 === 0) continue; // discard all even numbers

    let divisible = false;
    for (p of primes.slice(1)) {
      if (i % p === 0) {
        divisible = true;
        break;
      }

      if (p >= Math.sqrt(i)) break; // check up to the squared root of the current number
    }

    if (!divisible) primes.push(i); // if not divisible by any prime, add to array
  }

  return primes.length;
}
