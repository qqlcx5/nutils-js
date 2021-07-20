
/**
 * @description: 每隔三位数字添加逗号
 * @param {*}
 * @return {*}
 */

const thousands = (num, chars=',') => String(num).replace(String(num).indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g, `$1${chars}`)

module.exports = thousands