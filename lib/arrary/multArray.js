/**
 * @description: 
 * @param {*} arr
 * @param {*} count
 * @return {*}
 */
function multArray(arr, count = 8) {
  let pages = []
  arr.forEach((item, index) => {
  const page = Math.floor(index / count)
      if (!pages[page]) pages[page] = []
      pages[page].push(item)
  })
  return pages
}

module.exports = multArray

