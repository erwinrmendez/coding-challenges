/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let reversed = str.split("").reverse().join("");

  return str === reversed;
};
