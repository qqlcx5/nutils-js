
/**
 * @description: 打乱数组
 * @param {*} arr The array
 * @return {*} array
 */
 const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    console.log(i);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};
module.exports = shuffle
// console.log(shuffle([1, 2, 3, 4]))