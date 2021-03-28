
/**
 * @description: 节流
 * @param {*}
 * @return {*}
 */
const throttle = (function() {
  let timeout = null;
  return function(func, wait) {
      let context = this;
      let args = arguments;
      if (!timeout) {
          timeout = setTimeout(() => {
              timeout = null;
              func.apply(context, args)
          }, wait)
      }
  }
})();

for (let index = 0; index < 20; index++) {
  setTimeout(()=>{
    throttle(()=>{console.log('throttle'+ index),500})
  }, 1000)
}

module.exports = throttle