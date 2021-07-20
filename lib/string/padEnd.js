
/**
 * @description: 填充右侧字符
 * @param {*}
 * @return {*}
 */

const padEnd = (str, n = 0, maskChar = " ") => String(str).slice(0, n).padEnd(n, maskChar)

module.exports = padEnd