/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let matchStr = '';
  let s2copy = s2.slice();
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2copy.length; j++) {
      if (s1[i] === s2copy[j]) {
        matchStr += s1[i];
        s2copy = s2copy.slice(0, j) + s2copy.slice(-(s2copy.length - j - 1));
        break;
      }
    }
  }
  return matchStr.length;
}

module.exports = getCommonCharacterCount;
