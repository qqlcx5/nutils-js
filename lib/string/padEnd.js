
/**
 * @description: 遮住字符串
 * @param {*}
 * @return {*}
 */

const padEnd = (str, n = 0, maskChar = "*") => str.slice(str.length - n, str.length).padEnd(str.length > n ? str.length : n, maskChar)

module.exports = padEnd