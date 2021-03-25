
/**
 * @description: 指定范围的随机整数
 * @param {*} number
 * @return {*} array
 */
 const randomNumber = (min, max)=> Math.floor(Math.random() * (max - min + 1)) + min

module.exports = randomNumber