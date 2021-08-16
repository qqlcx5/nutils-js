/**
 * @description: 检查两个数组各项相等
 * @param {*} arr The array
 * @param {*} arr The array
 * @return {*} boolean
 */

 const isArrayEqual = (a, b, has = true) => {
  if (a.length !== b.length) return has = false
  const s = new Set(b);
  if(a.find(x => !s.has(x))) return has = false
  return has
}

module.exports = isArrayEqual;
