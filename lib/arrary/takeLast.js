
/**
 * @description: 截取数组最后指定的元素
 * @param {*} arr The array
 * @return {*} array
 */

const takeLast = (arr, n = 1) => arr.slice(0, -n);

module.exports = takeLast
