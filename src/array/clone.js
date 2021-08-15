/**
 * @description: 克隆数组或者对象(浅拷贝)
 * @param {*} arr The array
 * @return {*} array
 */
const clone = nums => (Array.isArray(nums) ? [...nums] : nums !== null && typeof nums === 'object' ? Object.assign({}, nums) : nums)

module.exports = clone