const isOneEdit = (str1, str2) => {
  let n = str1.length;
  let m = str2.length;
  let edits = 0;

  // reasign variables so to identify which one is the longest (if any)
  let newStr1 = str1;
  let newStr2 = str2;

  if (m > n) {
    newStr1 = str2;
    newStr2 = str1;
  }

  // no edits or more than one edit required
  if (newStr1 == newStr2 || Math.abs(n - m) > 1) return false;

  let i = 0; // index
  while (i < n) {
    if (newStr1[i] !== newStr2[i]) {
      edits++;

      // break loop if more than one edit is required
      if (edits > 1) return false;

      // if not same length, remove extra character and skip incrementing index
      if (n !== m) {
        newStr1 = newStr1.split("");
        newStr1[i] = "";
        newStr1 = newStr1.join("");
        continue;
      }
    }

    // increment index
    i++;
  }

  return true;
};
