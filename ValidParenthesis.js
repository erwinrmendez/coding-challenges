/*
Source: [LeetCode](https://leetcode.com/problems/two-sum/)

Description:
Given a string str containing just the characters '(' and ')', determine if the input string is valid.

An input string is valid if the open parenthesis are closed in the correct order.

Solution:
Two solutions are included here for two different iterations of the problem. In Solution 1, I am only considering the parethensis, while in Solution 2
included other types of brackets as well in the same string. The same rules apply for it to be valid: it has to be in the correct order and they have to be
closed by the corresponding type of bracket.
*/

/*
Solution 1: only parenthesis
Using a counter to track the number of open parenthesis at any point. If that number is going below zero, the the string is invalid. At the end, there should be
no parenthesis opened.
*/
function isValid(str) {
  opened = 0;

  for (let par of str) {
    if (par === ")") {
      if (opened === 0) return false;
      opened--;
    } else {
      opened++;
    }
  }

  return opened === 0;
}

/*
Solution 2: containing other brackets
For this case, I use a stack (LIFO structure) to help keep track of the open brackets. Also, I am using an object (brackets) where the keys are the closing brakets
for type. If it is a closing bracket, I check that the stack is not empty and the last element in it is the corresponding opening bracket. If it isnt, then the
string is invalid. If it is an opening bracket, I push it to the stack. At the end, the size of the stack should be zero (all opening brackets are closed) or else
it is invalid.
*/

function isAlsoValid(str) {
  stack = [];
  brackets = { ")": "(", "]": "[", "}": "{" };

  for (let par of s) {
    if (brackets[par]) {
      len = stack.length;
      if (len === 0 || stack[len - 1] !== brackets[par]) return false;

      stack.pop();
    } else {
      stack.push(par);
    }
  }

  return stack.length === 0;
}
