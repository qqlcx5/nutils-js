
/**
 * @description: 克隆数组
 * @param {*} arr The array
 * @return {*} array
 */
 const clone = (...nums) => Array.isArray(nums) ? nums : [...nums];

// module.exports = clone
console.log(clone([1,23,3,13,123,1]));