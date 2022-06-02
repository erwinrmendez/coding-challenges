/**
 * Solution:
 * Add numbers in each row in the given matrix to the corresponding row in the transposed matrix by using each col index as the row index in the transposed.
 */

function transpose(matrix: number[][]): number[][] {
  let transposed = [];

  matrix.forEach((row) => {
    row.forEach((col, i) => {
      transposed[i] ? transposed[i].push(col) : (transposed[i] = [col]);
    });
  });

  return transposed;
}
