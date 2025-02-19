/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedAndFilteredArrItems = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  const arrCopy = arr.slice();
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] !== -1) {
      arrCopy[i] = sortedAndFilteredArrItems.shift();
    }
  }
  return arrCopy;
}

module.exports = sortByHeight;
