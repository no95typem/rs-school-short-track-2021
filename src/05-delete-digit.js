/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = n.toString().split('');
  let indexOfMin = 0;
  for (let i = 0; i < nArr.length; i++) {
    if (nArr[i] < nArr[indexOfMin]) indexOfMin = i;
  }
  nArr.splice(indexOfMin, 1);
  return nArr.join('');
}

module.exports = deleteDigit;
