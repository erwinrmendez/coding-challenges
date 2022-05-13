/*
Description:
Write a function that, when given an array and chunk size, will return a new array divided into many subarrays where each subarray is the chunk length.

Solution:
Two solutions are given. Solution 1 is brute force and Solution 2 uses the slice function.
*/

/*
Solution 1: brute force
Here I add every number up to the chunk size to a temporary variable. When reached the size, I add the chunk to the chunked array and set the temporary array
back to empty. This is reapeated until there are no more numbers left.
*/
function chunkArray(arr, n) {
  if (arr.length === 0) return []; // if empty, return empty

  let chunked_arr = [];
  let chunk = [];

  for (let i = 0; i < arr.length; i++) {
    chunk.push(arr[i]);

    if (chunk.length === n || i + 1 === arr.length) {
      chunked_arr.push(chunk);
      chunk = [];
    }
  }

  return chunked_arr;
}

/*
Solution 2: slice and conquer
Here I use the slice function to get the complete chunk in each iteration, until there are no more elements left in the array.
*/
function alsoChunkArray(arr, n) {
  let size = arr.length;
  let chunked_arr = [];
  let i = 0; // index

  while (size > 0) {
    chunked_arr.push(arr.slice(i, i + n)); // push an entire chunk to the array, beginning  at the current index
    size -= n; // reduce the size (representing the number of elements left)
    i += n; // next starting position
  }

  return chunked_arr;
}
