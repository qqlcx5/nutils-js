
/**
 * @description: 随机排序
 * @param {*} arr The array
 * @return {*} array
 */
 const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
module.exports = shuffle