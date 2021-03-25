
/**
 * @description: 遮住字符串
 * @param {*}
 * @return {*}
 */
 const maskString = (str, maskChar = "*") => str.slice(0, 4).padEnd(str.length, maskChar)


module.exports = maskString