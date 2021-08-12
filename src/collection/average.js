
/**
 * @description: 求平均值
 * @param {*}
 * @return {*}
 */
 const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

module.exports = average

