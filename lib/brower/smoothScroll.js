/**
 * @description: 平滑滚动页面
 * @param {*} page
 * @return {*}
 */
const smoothScroll = (element) =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth',
  });

module.exports = smoothScroll;
