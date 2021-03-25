
/**
 * @description: 数组降序
 * @param {*} arr The array
 * @return {*} array
 */
 const descArr = (arr) => [...arr].sort((a, b) => b - a)

module.exports = descArr