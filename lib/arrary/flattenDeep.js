
 /**
  * @description: 扁平化数组
  * @param {*} arr
  * @param {*} depth
  * @return {*} array
  */ 

 const flattenDeep = (arr, depth = 1) =>
 arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

module.exports = flattenDeep