
/**
 * @description: 计算两点之间的距离
 * @param {*} arr The array
 * @return {*} array
 */
 const getLineSize = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)

module.exports = getLineSize