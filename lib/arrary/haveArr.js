
/**
 * @description: 扁平化
 * @param {*} arr The array
 * @return {*} array
 */
 const haveArr = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
module.exports = haveArr