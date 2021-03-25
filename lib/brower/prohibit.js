/**
 * @description: 拆解url地址成为路由跳转参数
 * @param {*} page
 * @return {*}
 */
function prohibit() {
  ['contextmenu', 'selectstart', 'copy'].forEach((o) =>
    document.addEventListener(o, (event) => (event.returnValue = false))
  );
}

module.exports = prohibit;
