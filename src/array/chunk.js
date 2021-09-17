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
//  arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);


module.exports = chunk

