
/**
 * @description: 指定范围的随机整数
 * @param {*} number
 * @return {*} 
 */
 const random = (min = 0, max = 10)=> Math.floor(Math.random() * (max - min + 1)) + min


module.exports = random