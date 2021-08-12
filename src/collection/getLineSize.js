
/**
 * @description: 计算两点之间的距离
 * @param {*} `x1 y1 x2 y2`坐标点
 * @return {*} number
 */
 const getLineSize = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)

module.exports = getLineSize