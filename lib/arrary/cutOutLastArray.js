
/**
 * @description: 扁平化
 * @param {*} arr The array
 * @return {*} array
 */
 const cutOutLastArray = (arr, n = 1) => arr.slice(0, -n);

module.exports = cutOutLastArray