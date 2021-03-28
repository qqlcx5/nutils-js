
/**
 * @description: 求平均值
 * @param {*} arr The array or number
 * @return {*} number
 */
 const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

module.exports = average

