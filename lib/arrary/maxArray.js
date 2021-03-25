
/**
 * @description: 最大值
 * @param {*} arr The array
 * @return {*} array
 */
 const maxArray = (arr) =>  Math.max(...(arr.filter(Boolean)))

module.exports = maxArray