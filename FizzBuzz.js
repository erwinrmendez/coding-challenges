/*
Source: [LeetCode](https://leetcode.com/problems/fizz-buzz/)

Description:
Given an integer n, return a string array answer (1-indexed) where:
- answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
- answer[i] == "Fizz" if i is divisible by 3.
- answer[i] == "Buzz" if i is divisible by 5.
- answer[i] == i (as a string) if none of the above conditions are true.

Solution:
I use a string variable and add either Fizz or Buzz (or both) to it if the conditions apply, otherwise, the current number (converted to string) is assigned
the value. At the end, 
*/

function fizzbuzz(n) {
  let answer = [];

  for (i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) str = "Fizz";
    if (i % 5 === 0) str += "Buzz";
    if (str === "") str = i.toString();

    answer.push(str);
  }

  return answer;
}
