
/**
 * @description: 累计值
 * @param {*}
 * @return {*}
 */
 const accum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

module.exports = accum