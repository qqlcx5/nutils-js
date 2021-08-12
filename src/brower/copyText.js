function copyText(content, callback) {
  if (!document.queryCommandSupported('copy')) {
    //为了兼容有些浏览器 queryCommandSupported 的判断
    console.log('浏览器不支持');
    return;
  }
  let textarea = document.createElement('textarea');
  textarea.value = content;
  textarea.readOnly = 'readOnly';
  document.body.appendChild(textarea);
  textarea.select(); // 选择对象
  textarea.setSelectionRange(0, content.length); //核心
  let result = document.execCommand('copy'); // 执行浏览器复制命令
  callback && callback(result ? '复制成功~~' : '复制失败~~')
  textarea.remove();
}

module.exports = copyText;
