/*
Source: [LeetCode](https://leetcode.com/problems/valid-anagram/)

Description:
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Solution:
Two solutions are given. Solution 1 uses sorting to solve the problem while Solution 2 uses a hashmap.
*/

/*
Solution 1: sorting
1. Check and return false if not the same length
2. Convert to array, sort and join again to compare the two resulting strings.
*/
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  if (s === t) return true;

  let arr1 = s.split("");
  let arr2 = t.split("");

  arr1.sort();
  arr2.sort();

  return arr1.join("") == arr2.join(""); // using join to compare as strings
}

/*
Solution 2: hashmap
1. Check and return false if not the same length
2. Convert to character object, using the characters as key and the frequencies as values.
3. If the one of the key in obj2 doesnt exist or the value is different, return false. Otherwise, return true. 
*/

function isAlsoAnagram(s, t) {
  if (s.length !== t.length) return false;
  if (s === t) return true;

  let obj1 = toCharObject(s);
  let obj2 = toCharObject(t);

  for (let ch in obj1) {
    if (!obj2[ch] || obj2[ch] !== obj1[ch]) return false;
  }

  return true;
}

// helper function to convert string to an Object where the keys are the characters and the values are the frequencies
function toCharObject(str) {
  let char_object = {};

  for (let ch of str) {
    !char_object[ch] ? (char_object[ch] = 1) : char_object[ch]++;
  }

  return char_object;
}
