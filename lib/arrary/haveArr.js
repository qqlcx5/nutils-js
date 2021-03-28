
/**
 * @description: 具有共同`array`值的数组
 * @param {*} arr The array
 * @return {*} array
 */

const haveArr = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

// ES6 includes
// const haveArr = (arr, values) => arr.filter(v => values.includes(v));
module.exports = haveArr