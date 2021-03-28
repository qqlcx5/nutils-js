/**
 * @description: 生成树结构数据
 * @param {*} arr The array
 * @return {*} array
 */

const treeData = (arr, id = null, link = 'parent_id') =>
  arr
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: treeData(arr, item.id) }));

module.exports = treeData;
