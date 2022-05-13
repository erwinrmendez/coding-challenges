/*
Source: [LeetCode](https://leetcode.com/problems/merge-sorted-array/)

Description:
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1
and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of
m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a
length of n.

Solution:
The approach to the solution is as follows:
- If n === 0, I return with the values unchanged.
- If m === 0, then I replace values of nums1 with nums2 array
- Otherwise, insert each value of nums2 into nums1 until there are no values left in nums2. Here I use the splice function and the spread syntax (...) to
modify the values in place.
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
