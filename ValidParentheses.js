function isValid(str) {
  stack = []; // keeps track of open parentheses
  brackets = { ")": "(", "]": "[", "}": "{" };

  for (let par of s) {
    if (brackets[par]) {
      let len = stack.length;

      // if there are no open parentheses or last opened is not of same type
      // then return false, otherwise remove the last opened parentheses.
      if (len === 0 || stack[len - 1] !== brackets[par]) return false;

      stack.pop();
    } else {
      stack.push(par);
    }
  }

  return stack.length === 0;
}
