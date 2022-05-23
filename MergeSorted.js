/**
 * Solution:
 * The approach to the solution is as follows:
 * - If n === 0, I return with the values unchanged.
 * - If m === 0, then I replace values of nums1 with nums2 array
 * - Otherwise, insert each value of nums2 into nums1 until there are no values left in nums2. Here I use the splice function and the spread syntax (...) to modify the values in place.
 */

function merge(nums1, m, nums2, n) {
  // exceptions
  if (n === 0) return;
  if (m === 0) {
    nums1.splice(0, n, ...nums2); // modify values in place
    return;
  }

  // remove zeros
  nums1 = nums1.slice(0, -n);

  for (let i = 0; i < m; i++) {
    if (nums2[0] < nums1[i]) {
      nums1 = [...nums1.slice(0, i), nums2[0], ...nums1.slice(i, m + n)];
      nums2.shift();
      i++;
    }

    if (nums2.length === 0) break;
  }

  nums1 = [...nums1, ...nums2];
}
