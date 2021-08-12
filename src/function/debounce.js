/**
 * @description: 防抖
 * @param {*}
 * @return {*}
 */
let timeout = null;
function debounce(func, wait = 500) {
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout)
  timeout = setTimeout(function () {
    typeof func === 'function' && func()
  }, wait)
}

module.exports = debounce
