/**
 * Solution:
 * I use a string variable and add either Fizz or Buzz (or both) to it if the conditions apply, otherwise, the current number (converted to string) is assigned
 * the value.
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
