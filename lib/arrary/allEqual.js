
/**
 * @description: 筛选两个数组差异值
 * @param {*} arr The array
 * @return {*} array
 */

 const diffArray = (a, b) => {
  const a1 = new Set(a);
  const b1 = new Set(b);
  let arr1 = a.filter(x => !b1.has(x));
  let arr2 = b.filter(x => !a1.has(x));
  return [...arr1, ...arr2]
};

module.exports = diffArray