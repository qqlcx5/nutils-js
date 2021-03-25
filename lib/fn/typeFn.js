
/**
 * @description: 防抖
 * @param {*}
 * @return {*}
 */
const debounce = (function() {
  let timer = {};
  return function(func, wait = 500) {
      let context = this; // 注意 this 指向
      let args = arguments; // arguments中存着e
      let name = arguments[0].name || 'arrow'; //箭头函数
      if (timer[name]) clearTimeout(timer[name]);
      timer[name] = setTimeout(() => {
          func.apply(this, args)
      }, wait)
  }
})();

module.exports = debounce