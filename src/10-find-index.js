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
  for (let index = Math.floor(array.length / 2); ;) {
    if (array[index] > value) index = Math.floor(index / 2);
    else if (array[index] < value) index += Math.ceil((array.length - 1 - index) / 2);
    else return index;
  }
}

module.exports = findIndex;
