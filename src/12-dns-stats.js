/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = new Map();
  for (let i = 0; i < domains.length; i++) {
    for (let i = domains[i].length - 1; i > -1; i--) {
      if (domains[i][i] === '.') {
        const dns = `.${domains[i].substr(i + 1).split('.').reverse().join('.')}`;
        if (map.has(dns)) map.set(dns, map.get(dns) + 1);
        else map.set(dns, 1);
      }
    }
    const dns = `.${domains[i].split('.').reverse().join('.')}`;
    if (map.has(dns)) map.set(dns, map.get(dns) + 1);
    else map.set(dns, 1);
  }
  return map;
}

module.exports = getDNSStats;
