/**
 * Solution:
 * I am using a recursive `count` function to count the number of subarrays the given number (n) at index (i) is the max, either starting or ending
 * at that index. I also decided to reverse the array to check for subarrays before the current position, this to be able to use the same helper function.
 */

function countSubarrays(arr) {
  let output = [];

  arr.forEach((n, i) => {
    let counter = 1;

    // only check previous subarrays when index > 0
    if (i > 0) {
      counter += count(n, arr.slice(0, i).reverse()); // reversing subarray to check from left to right
    }

    // don't check for last index
    if (i + 1 < arr.length) {
      counter += count(n, arr.slice(i + 1));
    }

    output.push(counter);
  });

  return output;
}

// helper recursive function to calculate the number of subarrays that fulfill the condition
function count(n, subarray) {
  if (n < subarray[0]) return 0;
  if (subarray.length == 1) return 1;
  return 1 + count(n, subarray.slice(1));
}
