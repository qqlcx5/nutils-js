
/**
 * @description: 有唯一array值的数组
 * @param {*} arr The array
 * @return {*} array
 */
 const diffArray = (a, b) => {
  const s = new Set(b);
  let arr = a.filter(x => !s.has(x));
  return arr
};

console.log(diffArray([1, 2, 6, 7], [1, 2, 9, 5]));
// module.exports = diffArray