/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let index = 0;
  for (let indexInc = Math.floor(array.length / 2); ;) {
    index += indexInc;
    if (array[index] > value) indexInc -= Math.floor(indexInc / 2);
    else if (array[index] < value) indexInc += Math.floor(indexInc / 2);
    else return index;
  }
}

module.exports = findIndex;
