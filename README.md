# Javascript 高效开发工具库

[![npm](https://img.shields.io/npm/v/nutils-js.svg)](https://www.npmjs.com/package/nutils-js)
[![LICENSE MIT](https://img.shields.io/npm/l/nutils-js.svg)](https://www.npmjs.com/package/nutils-js)

:rocket: `nutils-js` 是我封装的一个模块化、高性能的 JavaScript 实用工具库。

前端开发中经常会遇到`Array`、`Object`、`String`、`Number`等数据处理，或者是防抖节流函数等性能优化亦或是 URL 参数处理、类型判断等等操作，为了提高开发效率，我将这些常见公共方法进行抽离并封装好，发布在 npm 上，后续如有更优的写法也会做进一步的更新。另外读者朋友们如果有好的建议或者想为本项目贡献一份力的话，欢迎为本项目提交 pr，一起探讨和交流。

## :arrow_down: 安装

```bash
$ npm i --save nutils-js
```

## :beers: 使用

```js
const nutils = require('nutils-js')
nutils.multArray([1, 2, 3], 2)
```

## :package: API 文档

### 数组

-   [`multArray`二维数组转换](###`multArray`二维数组转换)
-   [`flatten`扁平化数组](###`flatten`扁平化数组)
-   [`flattenDeep`指定层级扁平化数组](###`flattenDeep`指定层级扁平化数组)
-   [`isArrayEqual`检查两个数组各项相等](###`isArrayEqual`检查两个数组各项相等)
-   [`allEqual`检查数组各项相等](###`allEqual`检查数组各项相等)
-   [`diffArray`具有唯一`array`值的数组](###`diffArray`具有唯一`array`值的数组)
-   [`haveArr`具有共同`array`值的数组](###`haveArr`具有共同`array`值的数组)
-   [`uniqueArray`数组去重](###`uniqueArray`数组去重)
-   [`uniqueArrayObject`数组对象去重](###`uniqueArrayObject`数组对象去重)
-   [`treeData`生成树结构数据](###`treeData`生成树结构数据)
-   [`ascArr`数组升序](###`ascArr`数组升序)
-   [`descArr`数组降序](###`descArr`数组降序)
-   [`shuffle`随机排序](###`shuffle`随机排序)
-   [`takeArray`截取数组开始指定的元素](###`takeArray`截取数组开始指定的元素)
-   [`takeLastArray`截取数组最后指定的元素](###`takeLastArray`截取数组最后指定的元素)
-   [`cloneArray`克隆数组](###`cloneArray`克隆数组)
-   [`maxArray`数组中最大值](###`maxArray`数组中最大值)
-   [`validArray`去除数组中的无效值](###`validArray`去除数组中的无效值)

### 对象

-   [`isObjectEqual`检查两个对象各项值相等](###`isObjectEqual`检查两个对象各项值相等)
-   [`cloneObject`克隆对象](###`cloneObject`克隆对象)

### 函数

-   [`debounce`函数防抖](###`debounce`函数防抖)
-   [`throttle`函数节流](###`throttle`函数节流)
-   [`typeFn`类型判断](###`typeFn`类型判断)
-   [`calcFn` 加减乘除运算](###`calcFn`加减乘除运算)

### 字符串

-   [`isNil`值是否是`null`或`undefined`](###`isNil`值是否是`null`或`undefined`)
-   [`padStart`遮住字符串](###`padStart`遮住字符串)
-   [`thousands`数字每隔三位数加分号](###`thousands`数字每隔三位数加分号)

### 数字

-   [`randomNumber`指定范围的随机整数](###`randomNumber`指定范围的随机整数)
-   [`average`求平均值](###`average`求平均值)
-   [`averageBy`检查数组对象各项相等](###`averageBy`检查数组对象各项相等)
-   [`aboutEqual`两个值是否约等于](###`aboutEqual`两个值是否约等于)
-   [`getLineSize`计算两点之间的距离](###`getLineSize`计算两点之间的距离)
-   [`sum`数组中值总和](###`sum`数组中值总和)

### 浏览器

-   [`copyText`H5 复制文本](###`copyText`H5复制文本)
-   [`getCurrentURL`获取当前的 URL 地址](###`getCurrentURL`获取当前的URL地址)
-   [`scrollToTop`返回顶部](###`scrollToTop`返回顶部)
-   [`smoothScroll`平滑滚动页面](###`smoothScroll`平滑滚动页面)
-   [`isCurrentPage`是否是当前页面](###`isCurrentPage`是否是当前页面)

### 环境

-   [`isBrowser`是否是浏览器](###`isBrowser`是否是浏览器)
-   [`isWechatBrowser`判断微信浏览器还是普通 h5](###`isWechatBrowser`判断微信浏览器还是普通h5)
-   [`isMobile`判断是否是移动端](###`isMobile`判断是否是移动端)

> 如果对本文有啥疑问或建议，欢迎加我微信`qqlcx55`一起学习哈

| 微信  | 微信公众号 |
|:---:|:-----:|
|  ![weChat](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/wechat.jpeg)   |  ![public](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/public.jpg) |

## 一、数组

### `multArray`二维数组转换

将数组（array）拆分成多个子数组，并将这些子数组组成一个新数组。

```js
multArray(array, count)
```

**参数**

-   `array`需要处理的数组
-   `count = 8`子数组需要的长度

**示例**

```js
multArray([1, 2, 3, 4, 5, 6, 7], 2)
=> [[1, 2], [3, 4], [5, 6], [7]]

multArray(['a', 'b', 'c', 'd'], 3)
=> [['a', 'b', 'c'], ['d']]
```

**源码**

```js
function multArray(arr, count = 8) {
    let pages = []
    arr.forEach((item, index) => {
        const page = Math.floor(index / count)
        if (!pages[page]) pages[page] = []
        pages[page].push(item)
    })
    return pages
}
```

### `flatten`扁平化数组

将多层嵌套数组（array）拆分成一个数组

```js
flatten(array)
```

**参数**

-   `array`多层嵌套数组

**示例**

```js
flatten([1, [2], [3], [4, 5]])

// [1, 2, 3, 4, 5]
```

**源码**

```js
// 扁平化  Map 方法
const flatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? flatten(v) : v)))

// 扁平化  reduce 方法
const flatten = arr => arr.reduce((a, c) => a.concat(Array.isArray(c) ? flatten(c) : c), [])
```

### `flattenDeep`指定层级扁平化数组

将多层嵌套数组（array）拆分成指定层级数组

```js
flattenDeep(array, depth)
```

**参数**

-   `array`多层嵌套数组 `depth = ` 减少的嵌套层级数

**示例**

```js
flattenDeep([1, [2, [3, [4]], 5]], 1)
// => [1, 2, [3, [4]], 5]

// ES6方法 `flat(depth)`
;[1, [2, [3, [4]], 5]].flat(1)
// => [1, 2, [3, [4]], 5]
```

**源码**

```js
const flattenDeep = (arr, depth = 1) => arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), [])
```

### `isArrayEqual`检查两个数组各项相等

比较两个数组内的各项值是否相等，返回一个`Boolean`值

```js
isArrayEqual(array, array)
```

**参数**

-   `array` 要检查的数组
-   `array` 要检查的数组

**示例**

```js
isArrayEqual([6, 5, 2, 4, 1, 3], [1, 2, 3, 4, 5, 6])
// => true

isArrayEqual([6, 5, 2, 7, 1, 3], [1, 2, 3, 4, 5, 6])
// => false
```

**源码**

```js
const isArrayEqual = (a, b, has = true) => {
    if (a.length !== b.length) return (has = false)
    const s = new Set(b)
    if (a.find(x => !s.has(x))) return (has = false)
    return has
}
```

### `allEqual`检查数组各项相等

```js
allEqual(array)
```

**参数**

-   `array` 要检查的数组

**示例**

```js
allEqual([1, 2, 3, 4, 5, 6])
// => false

allEqual([1, 1, 1, 1])
// => true
```

**源码**

```js
const allEqual = arr => arr.every(val => val === arr[0])
```

### `diffArray`具有唯一`array`值的数组

创建一个具有唯一 array 值的数组，每个值不包含在其他给定的数组中

```js
diffArray(array, array2)
```

**参数**

-   `array` 要检查的数组
-   `array2`要排除的数组

**示例**

```js
diffArray([1, 2, 6, 7], [1, 2, 9, 5])
// => [ 6, 7 ]
```

**源码**

```js
const diffArray = (a, b) => {
    const s = new Set(b)
    let arr = a.filter(x => !s.has(x))
    return arr
}
```

### `haveArr`具有共同`array`值的数组

创建一个具有共同 array 值的数组，每个值包含在其他给定的数组中

```js
haveArr(array, array2)
```

**参数**

-   `array` 要检查的数组
-   `array2`要包含的数组

**示例**

```js
haveArr([1, 2, 6, 7], [1, 2, 9, 5])
// => [ 1, 2 ]
```

**源码**

```js
const haveArr = (a, b) => {
    const s = new Set(b)
    return a.filter(x => s.has(x))
}
// ES6 includes
const haveArr = (arr, values) => arr.filter(v => values.includes(v))
```

### `uniqueArray`数组去重

创建一个去重后的 array 数组副本

```js
uniqueArray(array)
```

**参数**

-   `array` 要去重的数组

**示例**

```js
uniqueArray([1, 2, 2, 3, 4, 4, 5])
// => [ 1, 2, 3, 4, 5 ]
```

**源码**

```js
const uniqueArray = (...arr) => [...new Set(arr)]

const uniqueArray = (...arr) => Array.from(new Set(arr))
```

### `uniqueArrayObject`数组对象去重

创建一个去重后的 array 数组对象副本

```js
uniqueArrayObject(array)
```

**参数**

-   `array` 要去重的数组
-   `key` 要去重的对象属性值

**示例**

```js
const responseList = [
    { id: 1, a: 1 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
]

uniqueArrayObject(responseList, 'id')

// => [ { id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 } ]
```

**源码**

```js
const uniqueArrayObject = (arr, key) => {
    return arr.reduce((acc, cur) => {
        const ids = acc.map(item => item[key])
        return ids.includes(cur[key]) ? acc : [...acc, cur]
    }, [])
}
```

### `treeData`生成树结构数据

该函数传入一个数组， 每项`id`对应其父级数据`parent_id`，返回一个树结构数组

```js
treeData(array, id, parent_id)
```

**参数**

-   `array` 要生成树结构的数组
-   `id` 自定义属性名
-   `parent_id` 父级自定义属性名

**示例**

```js
const comments = [
    { id: 1, parent_id: null },
    { id: 2, parent_id: 1 },
    { id: 3, parent_id: 1 },
    { id: 4, parent_id: 2 },
    { id: 5, parent_id: 4 },
]

treeData(comments)

// => [ { id: 1, parent_id: null, children: [ [Object], [Object] ] } ]
```

**源码**

```js
const treeData = (arr, id = null, link = 'parent_id') => arr.filter(item => item[link] === id).map(item => ({ ...item, children: treeData(arr, item.id) }))
```

### `ascArr`数组升序

返回升序后的新数组

> sort()方法会改变原数组，默认按 unicode 码顺序排列

```js
ascArr(array)
```

**参数**

-   `array` 要检查的排序数组

**示例**

```js
ascArr([3, 2, 3, 4, 1])
// => [ 1, 2, 3, 3, 4 ]
```

**源码**

```js
// 通过ES6 ...展开运算符浅拷贝一份新数组
const ascArr = arr => [...arr].sort((a, b) => a - b)
```

### `descArr`数组降序

返回降序后的新数组

```js
descArr(array)
```

**参数**

-   `array` 要检查的排序数组

**示例**

```js
descArr([3, 2, 3, 4, 1])
// => [ 1, 2, 3, 3, 4 ]
```

**源码**

```js
const descArr = arr => [...arr].sort((a, b) => b - a)
```

### `shuffle`随机排序

创建一个随机的数组，使用`Fisher-Yates`算法随机排序数组的元素

```js
shuffle(array)
```

**参数**

-   `array` 要随机的数组

**示例**

```js
shuffle([2, 3, 1])
// => [3, 1, 2]
```

**源码**

```js
const shuffle = ([...arr]) => {
    let m = arr.length
    while (m) {
        const i = Math.floor(Math.random() * m--)
        ;[arr[m], arr[i]] = [arr[i], arr[m]]
    }
    return arr
}
```

### `takeArray`截取数组开始指定的元素

从 array 数组的最开始一个元素开始提取 n 个元素

```js
takeArray(array, n)
```

**参数**

-   `array`要检索的数组。
-   `n=`要提取的元素`n`个数。

**示例**

```js
takeArray([2, 3, 1], 2)
// => [2, 3]
```

**源码**

```js
const takeArray = (arr, n = 1) => arr.slice(0, n)
```

### `takeLastArray`截取数组最后指定的元素

从 array 数组的最后一个元素开始提取 n 个元素

```js
takeLastArray(array, n)
```

**参数**

-   `array`要检索的数组。
-   `n=`要提取的元素`n`个数。

**示例**

```js
takeArray([2, 3, 1], 2)
// => [3, 1]
```

**源码**

```js
const takeLastArray = (arr, n = 1) => arr.slice(0, -n)
```

### `cloneArray`克隆数组

浅拷贝一份数组副本

```js
cloneArray(array)
```

**参数**

-   `array`要复制的数组

**示例**

```js
cloneArray([1, 24])
// => [1, 24]
```

**源码**

```js
// ES6 ...
const cloneArray = arr => [...arr]

// ES6 Array.from
const cloneArray = arr => Array.from(arr)

// concat()
const cloneArray = arr => [].concat(arr)

// map()
const cloneArray = arr => arr.map(x => x)

cloneArray([1, 24]) // [1, 24]
```

### `maxArray`数组中最大值

过滤原数组中所有的非假值元素，返回数组中的最大值

```js
maxArray(array)
```

**参数**

-   `array`待处理的数组

**示例**

```js
maxArray([0, -1, -2, -3, false])
// => 0
```

**源码**

```js
const maxArray = arr => Math.max(...arr.filter(v => Boolean(v) || v === 0))
```

### `minArray`数组中最小值

过滤原数组中所有的非假值元素，返回数组中的最小值

```js
minArray(array)
```

**参数**

-   `array`待处理的数组

**示例**

```js
minArray([0, -1, -2, -3, false])
// => -3
```

**源码**

```js
const minArray = arr => Math.min(...arr.filter(v => Boolean(v) || v === 0))
```

### `validArray`去除数组中的无效值

创建一个新数组，包含原数组中所有的非假值元素。例如`false`, `null`,`0`, `""`, `undefined`, 和 `NaN` 都是被认为是“假值”。

```js
validArray(array)
```

**参数**

-   `array`待处理的数组

**示例**

```js
minArray([0, 1, false, 2, '', 3])
// => [1, 2, 3]
```

**源码**

```js
const validArray = arr => arr.filter(Boolean)
```

## 二、对象

### `isObjectEqual`检查两个对象各项值相等

```js
isObjectEqual(object, object2)
```

**参数**

-   `object`待检索的对象
-   `object2`待检索的对象

**示例**

```js
isObjectEqual({ a: 2, b: 4 }, { b: 4, a: 2 })
// => true
isObjectEqual({ a: 2, b: 4, c: 6 }, { b: 4, a: 2 })
// => false
```

**源码**

```js
function isObjectEqual(obj1, obj2, has = true) {
    // 判断类型
    const o1 = obj1 instanceof Object
    const o2 = obj2 instanceof Object
    if (!o1 || !o2) return obj1 === obj2
    // 判断长度
    const keys1 = Object.getOwnPropertyNames(obj1)
    const keys2 = Object.getOwnPropertyNames(obj2)
    if (keys1.length !== keys2.length) return false
    // 各项对比
    for (let o in obj1) {
        let t1 = obj1[o] instanceof Object
        let t2 = obj2[o] instanceof Object
        if (t1 && t2) {
            has = diffByObj(obj1[o], obj2[o])
        } else if (obj1[o] !== obj2[o]) {
            has = false
            break
        }
    }
    return has
}
```

### `cloneObject`克隆对象

浅拷贝一份对象副本

```js
cloneObject(object)
```

**参数**

-   `object`要复制的对象

**示例**

```js
const a = { x: 1, y: 1 }
const b = cloneObject(a)
// => a !== b
```

**源码**

```js
// ES6 ...
const cloneObject = (obj, temp = {}) => (temp = { ...obj })

// Object.assign()
const cloneObject = obj => Object.assign({}, obj)
```

## 三、函数

### `debounce`函数防抖

在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。

```js
debounce(fn, wait)
```

**参数**

-   `fn` 要防抖动的函数
-   `wait=500`需要延迟的毫秒数

**示例**

```
debounce(()=> { console.log('debounce') }, 1000)
// => 1秒后打印'debounce'
```

**源码**

```js
/** *
 * 防抖
 * @parmas fn 回调函数
 * @parmas time 规定时间
 */
const debounce = (function () {
    let timer = {}
    return function (func, wait = 500) {
        let context = this // 注意 this 指向
        let args = arguments // arguments中存着e
        let name = arguments[0].name || 'arrow' //箭头函数
        if (timer[name]) clearTimeout(timer[name])
        timer[name] = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
})()
```

### `throttle`函数节流

规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

```js
throttle(fn, wait)
```

**参数**

-   `fn` 要节流的函数
-   `wait=500`需要延迟的毫秒数

**示例**

```js
throttle(() => {
    console.log('throttle')
}, 1000)
// 1秒多次触发打印一次`throttle`
```

**源码**

```js
/** *
 * 节流(规定的时间才触发)
 * @parmas fn 结束完运行的回调
 * @parmas delay 规定时间
 */
export const throttle = (function () {
    let timeout = null
    return function (func, wait) {
        let context = this
        let args = arguments
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                func.apply(context, args)
            }, wait)
        }
    }
})()

throttle(fn, 300)
```

### `typeFn`类型判断

判断是否是 `Array` `Object` `String` `Number`类型

```js
typeFn.type(value)
```

**参数**

-   `type` 数据类型
-   `value`要检验的值

**示例**

```js
typeFn.String('1')
typeFn.Number(1)
typeFn.Boolean(false)
typeFn.Null(null)
typeFn.Array([1, 2])
typeFn.Object({ a: 1 })
typeFn.Function(() => {})

// => true
```

**源码**

```js
let typeFn = {}
const curring = (fn, arr = []) => {
    let len = fn.length
    return (...args) => {
        arr = arr.concat(args)
        if (arr.length < len) {
            return curring(fn, arr)
        }
        return fn(...arr)
    }
}

function isType(type, content) {
    return Object.prototype.toString.call(content) === `[object ${type}]`
}
;['String', 'Number', 'Boolean', 'Null', 'Array', 'Object', 'Function'].forEach(type => {
    typeFn[type] = curring(isType)(type)
})
```

### `calcFn`加减乘除运算

因为 JavaScript 遵循 IEEE 754 数学标准，使用 64 位浮点数进行运算。在进行十进制运算时会导致精度丢失。

```js
calcFn.add(value1, value2, value3)
```

**参数**

-   `add`、`sub`、`mul`、`div`运算符
-   `value`要计算的值

**示例**

```js
解决 0.1+0.2 !== 0.3 问题
//加法
calcFn.add(0.1, 0.2) // 0.3

//减法
calcFn.sub(0.1, 0.2) // 0.1

//乘法
calcFn.mul(0.2, 0.3) // 0.06

// 乘法
calcFn.add(0.1, 0.2) // 0.5
```

**源码**

```js
const calcFn = {
  add() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accAdd(total, num);
      });
  },
  sub() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accAdd(total, -num);
      });
  },
  mul() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accMul(total, num);
      });
  },
  div() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accDiv(total, num);
      });
  }
}

function accAdd(arg1, arg2) {
  let r1, r2, m;
  try {
      r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
      r1 = 0;
  }
  try {
      r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
      r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}

function accMul(arg1, arg2) {
  let m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
  try {
      m += s1.split(".")[1].length;
  } catch (e) {}
  try {
      m += s2.split(".")[1].length;
  } catch (e) {}
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

function accDiv(arg1, arg2) {
  let t1 = 0,
      t2 = 0,
      r1, r2;
  try {
      t1 = arg1.toString().split(".")[1].length;
  } catch (e) {}
  try {
      t2 = arg2.toString().split(".")[1].length;
  } catch (e) {}
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}
```

## 四、字符串

### `isNil`值是否是`null`或`undefined`

```js
isNil(value)
```

**参数**

-   `value` 要检验的值

**示例**

```js
isNil(null)
isNil(undefined)
// => true
```

**源码**

```js
const isNil = val => val === undefined || val === null
```

### `padStart`遮住字符串

```js
padStart(value, n, maskChar)
```

**参数**

-   `value` 要遮住字符串
-   `n = 4` 填充的长度
-   `maskChar` 填充字符

**示例**

```js
padStart('18659808664')
// => 1865*******
```

**源码**

```js
const padStart = (str, n = 4, maskChar = '*') => str.slice(0, n).padStart(str.length, maskChar)
```

### `thousands`数字每隔三位数加分号

```js
thousands(number)
```

**参数**

-   `number` 数字或者浮点数

**示例**

```js
thousands(12255552323)
// => 12,255,552323
```

**源码**

```js
const thousands = num => num.toString().replace(num.toString().indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g, '$1,')
```

## 五、数字

### `randomNumber`指定范围的随机整数

```js
randomNumber(min, max)
```

**参数**

-   `min` 指定范围最小值
-   `max` 指定范围最大值

**示例**

```js
randomNumber(0, 10)
// => 7
// => 2
```

**源码**

```js
const randomNumber = (min = 0, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min
```

### `average`求平均值

```js
average(value1, value2, value3)
```

**参数**

-   `value` 数字

**示例**

```js
average(...[1, 2, 3])
average(1, 2, 3)
// => 2
```

**源码**

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length
```

### `averageBy`检查数组对象各项相等

```
averageBy(array, fn)
```

**参数**

-   `array` 要迭代的数组
-   `fn` 迭代函数

**示例**

```js
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')
// => 5
```

**源码**

```js
const averageBy = (arr, fn) => arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) / arr.length
```

### `aboutEqual`两个值是否约等于

传入两个数字是否大致相等，误差在可接受范围内

```js
aboutEqual(n1, n2, epsilon)
```

**参数**

-   `n1 n2` 要比较的数字
-   `epsilon` 误差可接受范围内

**示例**

```js
aboutEqual(25, 2, 0.06)
// => true
```

**源码**

```js
const aboutEqual = (n1, n2, epsilon = 0.001) => Math.abs(n1 - n2) < epsilon
```

### `getLineSize`计算两点之间的距离

勾股定理计算两点之间的距离

```js
getLineSize = (x1, y1, x2, y2)
```

**参数**

-   `x1 y1 x2 y2`坐标点

**示例**

```js
getLineSize(0, 0, 3, 4)
// => 5
```

**源码**

```js
const getLineSize = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)
```

### `sum`数组中值总和

```js
sum(value1, value2, value3)
```

**参数**

-   `value1 value2 value3`要迭代的数字

**示例**

```js
sum(1, 2, 3, 4)
sum(...[1, 2, 3, 4])
// => 10
```

**源码**

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0)
```

## 六、浏览器

### `copyText`H5复制文本

```
copyText(content, callback)
```

**参数**

-   `content`要复制文字
-   `callback` 回调用户提示

**示例**

```js
copyText(content, text => {
    this.$toast(text)
})
```

**源码**

```js
function copyText(content, callback) {
    if (!document.queryCommandSupported('copy')) {
        //为了兼容有些浏览器 queryCommandSupported 的判断
        console.log('浏览器不支持')
        return
    }
    let textarea = document.createElement('textarea')
    textarea.value = content
    textarea.readOnly = 'readOnly'
    document.body.appendChild(textarea)
    textarea.select() // 选择对象
    textarea.setSelectionRange(0, content.length) //核心
    let result = document.execCommand('copy') // 执行浏览器复制命令
    callback && callback(result ? '复制成功~~' : '复制失败~~')
    textarea.remove()
}
```

### `getCurrentURL`获取当前的 URL 地址

该函数返回当前页面的 URL 地址。

**示例**

```js
getCurrentURL()
// =>
```

**源码**

```js
const getCurrentURL = () => window.location.href
```

### `scrollToTop`返回顶部

平滑地滚动到当前页面的顶部。

**示例**

```js
scrollToTop()
// => 当前页面的顶部
```

**源码**

```js
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
    }
}
```

### `smoothScroll`平滑滚动页面

平滑滚动到浏览器窗口的可见区域

**示例**

```js
smoothScroll('#fooBar');
// => 平滑滚动到ID为fooBar的元素
smoothScroll （'.fooBar' ）;
// => 使用fooBar类平滑滚动到第一个元素
```

**源码**

```js
const smoothScroll = element =>
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth',
    })
```

### 5.`isCurrentPage`是否是当前页面

浏览器的选项卡是否是用户在浏览

**示例**

```js
isCurrentPage()
// => true
```

**源码**

```js
isCurrentPage = () => !document.hidden
```

## 7.环境

### 1.`isBrowser`是否是浏览器

返回当前运行时环境是否为浏览器

**示例**

```js
isBrowser()
// => true (browser)
// => false (Node)
```

**源码**

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined')
```

### 2.`isWechatBrowser`判断微信浏览器还是普通h5

**示例**

```js
isWechatBrowser()
// => true
```

**源码**

```js
const isWechatBrowser = (() => {
    let ua = navigator.userAgent.toLowerCase()
    return /micromessenger/.test(ua)
})()
```

### 3.`isMobile`判断是否是移动端

**示例**

```js
isMobile()
// => true
```

**源码**

```js
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
```

## 参考资料

-   [30 seconds of code](https://www.30secondsofcode.org/)
-   [lodash](https://www.lodashjs.com/)
