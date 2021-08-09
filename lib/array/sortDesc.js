
/**
 * @description: 数组降序
 * @param {*} arr The array
 * @return {*} array
 */
 const sortDesc = (arr) => [...arr].sort((a, b) => b - a)

module.exports = sortDesc