
/**
 * @description: 数字每隔三位数加分号
 * @param {*} arr The array
 * @return {*} array
 */
 const thousands = (num) => num.toString().replace(num.toString().indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g, '$1,')

module.exports = thousands