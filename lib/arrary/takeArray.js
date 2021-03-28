
/**
 * @description:  截取数组开始指定的元素
 * @param {*} arr The array
 * @return {*} array
 */
 const takeArray = (arr, n = 1) => arr.slice(0, n);

module.exports = takeArray