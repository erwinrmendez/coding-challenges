/**
 * Solution:
 * I create an object where the character is the key and the frequency is the value. I also keep track of the max number of repetitions and the most repeated
 * character in to separate variables. After comparing in each iteration, and updating when required, I return the most repeated character with the corresponding
 * number repetitions.
 */

function mostRepeatedChar(str) {
  let chars_in_str = {};
  let most_repeated = "";
  let max_repetitions = 0;

  for (let char of str) {
    !chars_in_str[char] ? (chars_in_str[char] = 1) : chars_in_str[char]++;

    if (chars_in_str[char] > max_repetitions) {
      max_repetitions = chars_in_str[char];
      most_repeated = char;
    }
  }

  return { [most_repeated]: max_repetitions };
}
