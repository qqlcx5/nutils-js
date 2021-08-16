/**
 * @description: 克隆数组或者对象
 * @param {*} arr The array
 * @return {*} array
 */
const cloneDeep = obj => {
  const isObject = args => (typeof args === 'object' || typeof args === 'function') && typeof args !== null
  if (!isObject(obj)) return obj;
  let newObj = Array.isArray(obj) ? [...obj] : { ...obj }
  Reflect.ownKeys(newObj).map(key => {
    newObj[key] = isObject(obj[key]) ? cloneDeep(obj[key]) : obj[key]
  })
  return newObj
}
module.exports = cloneDeep

// function cloneDeep(obj) {
//   let newObj = Array.isArray(obj) ? [] : {}
//   if (obj && typeof obj === 'object') {
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         newObj[key] = obj && typeof obj[key] === 'object' ? cloneDeep(obj[key]) : obj[key]
//       }
//     }
//   }
//   return newObj
// }

// 测试用例

// let obj1 = {
//   a: 1,
//   b: { c: 2, d: 3 },
//   f: 4,
// }
// let obj2 = cloneDeep(obj1)
// obj1.a = 2
// obj1.b.c = 'ccc'
// obj1.b.d = obj1.f
// console.log(obj1, obj2)

// let arr1 = [{ a: 1, b: { c: 2, d: 3 } }, { a: 1, b: { c: 2, d: 3 } }, 1, 2, 4]
// let arr2 = cloneDeep(arr1)
// arr1[0].a = 'aaa'
// arr1[0].b.c = 'ccc'
// arr1[2] = arr1[1]
// console.log(arr1, arr2)
