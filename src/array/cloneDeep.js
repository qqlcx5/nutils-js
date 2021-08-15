/**
 * @description: 克隆数组或者对象
 * @param {*} arr The array
 * @return {*} array
 */
const cloneDeep = obj => {
  const isObject = args => (typeof args === 'object' || typeof args === 'function') && typeof args !== null
  if (!isObject) throw new Error('Not Reference Types')
  let newObj = Array.isArray(obj) ? [...obj] : { ...obj }
  Reflect.ownKeys(newObj).map(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  })
  return newObj
}

function cloneDeep(obj) {
  let newObj = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = obj && typeof obj[key] === 'object' ? cloneDeep(obj[key]) : obj[key]
      }
    }
  }
  return newObj
}
module.exports = cloneDeep
