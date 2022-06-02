/**
 * Solution:
 * Simple solution comparing from the maximum h-index possible (length of the citations array) and the continuing checking by decreasing that number.
 */

function hIndex(citations: number[]): number {
  let h = 0;
  let size = citations.length;

  for (let i = size; i > 0; i--) {
    let nPapers = citations.filter((c) => c >= i).length;
    if (nPapers >= i) {
      h = i;
      break;
    }
  }

  return h;
}
