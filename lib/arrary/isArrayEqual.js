/**
 * @description: 检查两个数组各项相等
 * @param {*} arr The array
 * @return {*} boolean
 */

const isArrayEqual = (a, b, has = true) => {
  if (a.length !== b.length) return (has = false);
  const s = new Set(b);
  for (let i = 0; i < a.length; i++) {
    if (!s.has(a[i])) return (has = false);
  }
  return has;
};

module.exports = isArrayEqual;
