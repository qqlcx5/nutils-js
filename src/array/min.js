
/**
 * @description: 最小值
 * @param {*} arr The array
 * @return {*} array
 */

const isCompact = (nums) => Array.isArray(nums) ? nums.filter((v) => Boolean(v) || v === 0) : undefined;
const min = (arr) => isCompact(arr) && isCompact(arr).length ? Math.min(...isCompact(arr)) : undefined;

module.exports = min;