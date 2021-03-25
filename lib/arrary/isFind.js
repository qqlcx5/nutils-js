
/**
 * @description: 查找数组符合条件的值
 * @param {*} arr The array
 * @return {*} array
 */
 const isFind = (arr, fn, key) => !!arr.find(typeof fn === 'function' ? fn : val => val[fn] === key)


module.exports = isFind