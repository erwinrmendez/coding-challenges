/**
 * Solution:
 * I traverse the string to find every index where there is a vowel, and then calculate the number of substrings associated to that vowel.
 */

/**
 * takes a word an returns the sum of the number of vowels in every
 * possible substring of the word
 * @param {string} word
 * @return {number}
 */
const countVowels = (word) => {
  // early return for word with only consonants.
  if (!hasVowel(word)) {
    return 0;
  }

  let n = word.length;
  let totalCount = 0;

  for (i = 0; i < n; i++) {
    let c = word[i];

    if (hasVowel(c)) {
      totalCount += n - i; // with the vowel as the initial character
      totalCount += i * (n - i); // with the vowel between other characters or at the end

      // break loop if there is no vowel in the remaining characters
      if (!hasVowel(word.slice(i + 1))) {
        break;
      }
    }
  }

  return totalCount;
};

/**
 * returns true if given string or character contains a vowel
 * @param {string} s
 * @return {boolean}
 */
const hasVowel = (s) => {
  return /[aeiou]/g.test(s);
};

console.log(countVowels("aeiou"));
