
/**
 * @description: 数组对象去重
 * @param {*} arr The array
 * @return {*} array
 */
 const uniqueArrayObject = (arr, key) => {
  return arr.reduce((acc, cur) => {
    const ids = acc.map((item) => item[key]);
    return ids.includes(cur[key]) ? acc : [...acc, cur];
  }, []);
};
module.exports = uniqueArrayObject