
/**
 * @description: 数组去重
 * @param {*} arr The array
 * @return {*} array
 */
 const unique = (...arr) => Array.from(new Set(arr))

module.exports = unique