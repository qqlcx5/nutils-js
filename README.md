# Javascript 前端高效开发工具库

**加入前端有道交流群、技术探讨、学习**

![wechat](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/wechat_m.png)

[![npm](https://img.shields.io/npm/v/nutils-js.svg)](https://www.npmjs.com/package/nutils-js)
[![LICENSE MIT](https://img.shields.io/npm/l/nutils-js.svg)](https://www.npmjs.com/package/nutils-js)

:rocket: `nutils-js` 是一套在开发中实践积累起来的实用 JavaScript 工具库。其次为学习而生，在当今有很多类似库，基本教我们如何去使用它，作为工具我觉得最最要一点是理解工具的精髓，它是如何去实现的。

作为 Web 开发人员，在日常开发中难免遇到`Array` `Object` `String` `Number`等数据处理，或者是`防抖节流函数`等性能优化亦或者`URL参数处理` `类型判断`等等这些都是使用率较高的 JavaScript 模块，避免在不同项目中复制粘贴的麻烦，发布在 npm 上，如果你有好的建议或者想为本项目贡献一份力的话，欢迎为本项目提交 pr，一起探讨和交流学习。

## :arrow_down: 安装

```bash
npm i --save nutils-js
```

## :beers: 使用

```js
const nutils = require('nutils-js')
nutils.chunk([1, 2, 3], 2)
```

## :package: API 文档

### 数组

- [`chunk`二维数组转换](###`chunk`二维数组转换)
- [`flatten`扁平化数组](###`flatten`扁平化数组)
- [`flattenDeep`指定层级扁平化数组](###`flattenDeep`指定层级扁平化数组)
- [`isEqual`检查两个数组各项相等](###`isEqual`检查两个数组各项相等)
- [`difference`具有唯一`array`值的数组](###`difference`具有唯一`array`值的数组)
- [`have`具有共同`array`值的数组](###`have`具有共同`array`值的数组)
- [`unique`数组去重](###`unique`数组去重)
- [`uniqueBy`数组对象去重](###`uniqueBy`数组对象去重)
- [`treeData`生成树结构数据](###`treeData`生成树结构数据)
- [`sortAsc`数组升序](###`sortAsc`数组升序)
- [`sortDesc`数组降序](###`sortDesc`数组降序)
- [`shuffle`打乱数组](###`shuffle`打乱数组)
- [`take`截取数组开始指定的元素](###`take`截取数组开始指定的元素)
- [`takeLast`截取数组最后指定的元素](###`takeLast`截取数组最后指定的元素)
- [`clone`克隆数组](###`clone`克隆数组)
- [`max`数组中最大值](###`max`数组中最大值)
- [`compact`去除数组中的无效值](###`compact`去除数组中的无效值)

### 对象

- [`isObjectEqual`检查两个对象各项值相等](###`isObjectEqual`检查两个对象各项值相等)
- [`cloneObject`克隆对象](###`cloneObject`克隆对象)

### 函数

- [`debounce`函数防抖](###`debounce`函数防抖)
- [`throttle`函数节流](###`throttle`函数节流)
- [`typeFn`类型判断](###`typeFn`类型判断)
- [`calcFn` 加减乘除运算](###`calcFn`加减乘除运算)

### 字符串

- [`isNil`值是否是`null`或`undefined`](###`isNil`值是否是`null`或`undefined`)
- [`padStart`遮住字符串](###`padStart`遮住字符串)
- [`thousands`数字每隔三位数加分号](###`thousands`数字每隔三位数加分号)

### 数字

- [`randomNumber`指定范围的随机整数](###`randomNumber`指定范围的随机整数)
- [`average`求平均值](###`average`求平均值)
- [`averageBy`检查数组对象各项相等](###`averageBy`检查数组对象各项相等)
- [`aboutEqual`两个值是否约等于](###`aboutEqual`两个值是否约等于)
- [`getLineSize`计算两点之间的距离](###`getLineSize`计算两点之间的距离)
- [`sum`数组中值总和](###`sum`数组中值总和)

### 浏览器

- [`copyText`H5 复制文本](###`copyText`H5复制文本)
- [`getCurrentURL`获取当前的 URL 地址](###`getCurrentURL`获取当前的URL地址)
- [`scrollToTop`返回顶部](###`scrollToTop`返回顶部)
- [`smoothScroll`平滑滚动页面](###`smoothScroll`平滑滚动页面)
- [`isCurrentPage`是否是当前页面](###`isCurrentPage`是否是当前页面)

### 环境

- [`isBrowser`是否是浏览器](###`isBrowser`是否是浏览器)
- [`isWechatBrowser`判断微信浏览器还是普通 h5](###`isWechatBrowser`判断微信浏览器还是普通h5)
- [`isMobile`判断是否是移动端](###`isMobile`判断是否是移动端)
