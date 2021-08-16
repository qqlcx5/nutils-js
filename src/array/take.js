
/**
 * @description:  截取数组开始指定的元素
 * @param {*} arr The array
 * @return {*} array
 */
 const take = (arr, n = 1) => Array.isArray(arr) ? arr.slice(0, n) : arr

module.exports = take
// console.log(take([1, 2, 3]))
// // => [1]
 
// console.log(take([1, 2, 3], 2))
// // => [1, 2]
 
// console.log(take([1, 2, 3], 5))
// // => [1, 2, 3]
 
// console.log(take([1, 2, 3], 0))
// // => []