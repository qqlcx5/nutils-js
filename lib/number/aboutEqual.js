
/**
 * @description: 两个值是否约等于
 * @param {*} arr The array
 * @return {*} array
 */
 const aboutEqual = (n1, n2, epsilon = 0.001) => Math.abs(n1 - n2) < epsilon;

module.exports = aboutEqual