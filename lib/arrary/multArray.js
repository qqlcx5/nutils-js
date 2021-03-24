function multArray(arr, count = 8, pages = []) {
  arr.forEach((item, index) => {
  const page = Math.floor(index / count)
      if (!pages[page]) pages[page] = []
      pages[page].push(item)
  })
  return pages
}

module.exports = multArray