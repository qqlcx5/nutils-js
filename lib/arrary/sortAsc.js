
/**
 * @description: 数组升序
 * @param {*} arr The array
 * @return {*} array
 */
 const sortAsc = (arr) => [...arr].sort((a, b) => a - b)

module.exports = sortAsc