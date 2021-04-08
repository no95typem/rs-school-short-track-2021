/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let outputStr = '';
  for (let i = 0; i < str.length; i++) {
    let counter = 1;
    while (str[i] === str[i + counter]) counter++;
    if (counter === 1) outputStr += str[i];
    else outputStr += counter + str[i];
    i += counter - 1;
  }
  return outputStr;
}

module.exports = encodeLine;
