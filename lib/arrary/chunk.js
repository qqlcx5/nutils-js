/**
 * @description: 
 * @param {*} array
 * @param {*} count
 * @return {*}
 */
function chunk(array, count = 1) {
  let pages = []
  array.forEach((item, index) => {
  const page = Math.floor(index / count)
      if (!pages[page]) pages[page] = []
      pages[page].push(item)
  })
  return pages
}

module.exports = chunk

