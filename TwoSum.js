/**
 * Solution:
 * I calculate the residue from the target minus value at current index. Using a temporary array (initially with all the values from the original),
 * I delete the value at index 0 (corresponds to current value being checked) and then validate if the residue is included in the rest of the numbers.
 * The result is either a tuple of indexes [currentIndex, residueIndex] or an empty array.
 */

function twoSum(nums, target) {
  let idx = 1;
  let temp = [...nums];

  for (let i = 0; i < nums.length; i++) {
    let res = target - nums[i];
    temp.splice(0, 1);

    // using the temporary array so to avoid false positives when res === nums[i]
    if (temp.includes(res)) {
      return [i, temp.indexOf(res) + idx];
    }

    idx++;
  }

  return [];
}
