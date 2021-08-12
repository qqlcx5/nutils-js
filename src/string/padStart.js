
/**
 * @description: 填充左侧字符
 * @param {*}
 * @return {*}
 */

const padStart = (str, n = 0, maskChar = ' ') => String(str).slice(0, n).padStart(n, maskChar)

module.exports = padStart