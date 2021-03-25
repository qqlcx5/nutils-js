/**
 * @description: 克隆对象
 * @param {*} object
 * @return {*}
 */
const cloneObject = (obj, temp = {}) => temp = { ...obj }


module.exports = cloneObject