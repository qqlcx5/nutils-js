
/**
 * @description: 类型判断
 * @param {*}
 * @return {*}
 */
 let typeFn = {}
 const curring = (fn, arr = []) => {
 let len = fn.length;
 return (...args) => {
         arr = arr.concat(args);
         if (arr.length < len) {
         return curring(fn, arr);
         }
         return fn(...arr);
     };
 };
 
 function isType(type, content) {
     return Object.prototype.toString.call(content) === `[object ${type}]`;
 }
 ['String' , 'Number', 'Boolean', 'Null', 'Array', 'Object', 'Function'].forEach((type) => {
     typeFn[type] = curring(isType)(type);
 })

module.exports = typeFn