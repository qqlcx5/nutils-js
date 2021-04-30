
/**
 * @description: 遮住字符串
 * @param {*}
 * @return {*}
 */

const padStart = (str, n = 0, maskChar = "*") => str.slice(0, n).padStart(str.length > n ? str.length : n, maskChar)

module.exports = padStart
