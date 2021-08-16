
/**
 * @description: 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 * @param {*} arr The array
 * @return {*} array
 */
 const difference = (a, b) => {
  const s = new Set(b);
  let arr = a.filter(x => !s.has(x));
  return arr
};

module.exports = difference

// console.log(difference([3, 2, 1], [4, 2]));