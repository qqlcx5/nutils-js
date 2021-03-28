
/**
 * @description: 遮住字符串
 * @param {*}
 * @return {*}
 */
 const padStart = (str, n = 4, maskChar = "*") => str.slice(0, n).padEnd(str.length, maskChar)


module.exports = padStart