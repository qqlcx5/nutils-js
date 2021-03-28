
/**
 * @description: 扁平化
 * @param {*} arr The array
 * @return {*} array
 */
const flattenMap = (arr) => [].concat(...arr.map(v => Array.isArray(v) ? flatten(v) : v))

module.exports = flattenMap