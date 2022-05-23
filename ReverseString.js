/**
 * Given a string str, return its reverse.
 * @param {string} str
 * @returns boolean
 */
const reverseString = (str) => {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
};
