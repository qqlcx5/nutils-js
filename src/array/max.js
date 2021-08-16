/**
 * @description: 计算 array 中的最大值。
 * @param {*} arr The array
 * @return {*} array
 */
const isCompact = (nums) => Array.isArray(nums) ? nums.filter((v) => Boolean(v) || v === 0) : undefined;
const max = (arr) => isCompact(arr) && isCompact(arr).length ? Math.max(...isCompact(arr)) : undefined;

module.exports = max;

// console.log(max([0, 0]));
// console.log(max([]));
// console.log(max([0, 1, false, 2, '', 3]));
// console.log(max([4, 2, 8, 6]));
