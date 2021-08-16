
/**
 * @description: 截取数组最后指定的元素
 * @param {*} arr The array
 * @return {*} array
 */

const takeLast = (arr, n = 1) => Array.isArray(arr) ? arr.slice(-n, arr.length) : arr;

module.exports = takeLast

// console.log(takeLast([1, 2, 3]))
// // => [1]
 
// console.log(takeLast([1, 2, 3], 2))
// // => [1, 2]
 
// console.log(takeLast([1, 2, 3], 5))
// // => [1, 2, 3]
 
// console.log(takeLast([1, 2, 3], 0))
// // => []