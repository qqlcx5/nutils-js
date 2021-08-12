
/**
 * @description: 具有唯一array值的数组
 * @param {*} arr The array
 * @return {*} array
 */
 const difference = (a, b) => {
  const s = new Set(b);
  let arr = a.filter(x => !s.has(x));
  return arr
};

module.exports = difference