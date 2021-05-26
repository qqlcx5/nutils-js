/**
 * @description: 最大值
 * @param {*} arr The array
 * @return {*} array
 */
const max = (arr) => Math.max(...arr.filter((v) => Boolean(v) || v === 0));

module.exports = max;