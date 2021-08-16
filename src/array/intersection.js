
/**
 * @description: 创建唯一值的数组，这个数组包含所有给定数组都包含的元素
 * @param {*} arr The array
 * @return {*} array
 */

const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

// ES6 includes
// const intersection = (arr, values) => arr.filter(v => values.includes(v));
module.exports = intersection