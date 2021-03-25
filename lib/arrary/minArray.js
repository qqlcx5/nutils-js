
/**
 * @description: 最大值
 * @param {*} arr The array
 * @return {*} array
 */
 const minArray = (arr) =>  Math.min(...(arr.filter(Boolean)))

module.exports = minArray