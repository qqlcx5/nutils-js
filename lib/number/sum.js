
/**
 * @description: 数组求和
 * @param {*} arr The array or number
 * @return {*} number
 */
 const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

module.exports = sum