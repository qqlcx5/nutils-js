
/**
 * @description: 最大值
 * @param {*} arr The array
 * @return {*} array
 */

const minArray = (arr) => Math.min(...arr.filter((v) => Boolean(v) || v === 0));

module.exports = minArray