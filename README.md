# `nutils-js` 前端高效开发必备库

项目的开发中数据操作`array`、`number`、`object`、`string`、`类型判断`、`节流函数`等常用函数，为避免重复的造轮子，提高开发效率，发布到npm上。如果你也有优质的代码或者好的主意，欢迎为本项目提交pr。

## 下载

压缩版
完整版
CDN

## :building_construction: 安装使用

支持ESM模块规范

### 浏览器:
``` html
<script src="nutils-js.min.js"></script>
```

### npm:
``` bash
$ npm i --save nutils-js
// or
$ npm i --save nutils-js
```
### webpack:

```js
import * as _n from 'nutils-js' 
// or 
import _n from 'nutils-js' 
// or 
import {x ,y , z } from 'nutils-js'
```

### Node.js:

```js
var _n = require('nutils-js');
```

## :package:  API文档

### 1.数组

#### `multArray`：一维数组拆分成二维数组

该函数传入第一个参数，第二个参数是可选的，函数返回一个二维数组。

**参数**

1. `array` (Array): 需要处理的数组
2. `[count=8]` (number): 子数组需要的长度

```js
function multArray(arr, count = 8, pages = []) {
    arr.forEach((item, index) => {
    const page = Math.floor(index / count)
        if (!pages[page]) pages[page] = []
        pages[page].push(item)
    })
    return pages
}
```

**示例**

```js
multArray([1, 2, 3, 4, 5, 6, 7], 2)
=> [[1, 2], [3, 4], [5, 6], [7]]

multArray(['a', 'b', 'c', 'd'], 3)
=> [['a', 'b', 'c'], ['d']]
```

#### `flatten` 数组扁平化

该函数传入一个多维数组，函数返回一个普通数组。

```js
// 扁平化  Map 方法
const flatten = (arr) => [].concat(...arr.map(v => Array.isArray(v) ? flatten(v) : v))

// 扁平化  reduce 方法
const flatten = (arr) => arr.reduce((a, c) => a.concat(Array.isArray(c)? flatten(c) : c), [])
```

示例

```js
flatten([1, [2], [3], [4, 5]]);
 
// [1, 2, 3, 4, 5]
```

扩展补充：ES6提供的新方法 `flat(depth)`

`flat(depth)` 方法中的参数depth，代表展开嵌套数组的深度，默认是`1`

```js
let a = [1, [2, 3]]

a.flat(); // [1, 2, 3] 
```

1. `average` 求平均值

该函数返回两个或多个数值的平均值。

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```

1. `sum` 求数组之和

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
 

1. `isArrayEqual` 检查两个数组各项相等

该函数必须传入两个数组，返回 Boolean。

```js
const isArrayEqual = (a, b, has = true) => {
  if (a.length !== b.length) return has = false
  const s = new Set(b);
  for (let i = 0; i < a.length; i++) {
      if(!s.has(a[i])) return has = false
  }
  return has
}
```

示例

```js
isArrayEqual([6, 5, 2, 4, 1, 3], [1, 2, 3, 4, 5, 6])

// true
```

1. `allEqual` 检查数组各项相等

该函数传入一个数组，返回 Boolean

```js
const allEqual = arr => arr.every(val => val === arr[0]);

allEqual([1, 2, 3, 4, 5, 6]); // false

allEqual([1, 1, 1, 1]); // true
```

1. `diffArray`筛选两个数组差异值

该函数传入两个数组，返回第一个数组的值

```js
const diffArray = (a, b) => {
  const a1 = new Set(a);
  const b1 = new Set(b);
  let arr1 = a.filter(x => !b1.has(x));
  let arr2 = b.filter(x => !a1.has(x));
  return [...arr1, ...arr2]
};
```

示例

```js
diffArray([1, 2, 6, 7], [1, 2, 9, 5])
// [ 6, 7, 9, 5 ]
```

1. `haveArr` 筛选两个数组中共有值

```js
const haveArr = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

//
const haveArr = (arr, values) => arr.filter(v => values.includes(v));


haveArr([1, 2, 3], [5, 1, 2]); 
// [1, 2]
```


1. `averageBy` 检查数组对象各项相等

该函数必须传入一个数组对象，第二个参数对象的属性名，返回 Boolean

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
  
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5

averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```

1. `aboutEqual` 两个值是否约等于

该函数传入两个数字是否大致相等，但相差很小

```js
const aboutEqual = (n1, n2, epsilon = 0.001) => Math.abs(n1 - n2) < epsilon;

console.log(aboutEqual(1.25, 1.2, 0.06)); // true
```

1. `getLineSize` 计算两点之间的距离

通过勾股定理计算，返回两点之间的距离

```js
const getLineSize = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)

getLineSize(0, 0, 3, 4) // 5
```

1. `uniqueArray` 数组去重

该函数传入一个数组，返回一个去重后的新数组

```js
const uniqueArray = (...arr) => [... new Set(arr)]

// ES6
const uniqueArray = (...arr) => Array.from(new Set(arr))

uniqueArray([1, 2, 2, 3, 4, 4, 5])
uniqueArray(1, 2, 2, 3, 4, 4, 5)
// [ 1, 2, 3, 4, 5 ]
```

1. `uniqueArrayObject` 数组对象去重

该函数传入一个数组对象，返回一个去重后的新数组

```js
const uniqueArrayObject = (arr, key) => {
  return arr.reduce((acc, cur) => {
    const ids = acc.map((item) => item[key]);
    return ids.includes(cur[key]) ? acc : [...acc, cur];
  }, []);
};
```

示例

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
];

uniqueArrayObject(responseList, 'id')

// [ { id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 } ]

```

1. `setTree`生成树结构(阿里面试题)

该函数传入一个数组，返回一个树结构数组

```js
const setTree = (arr, id = null, link = 'parent_id') =>
  arr
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: setTree(arr, item.id) }));
```

示例

```js
const comments = [
  { id: 1, parent_id: null },
  { id: 2, parent_id: 1 },
  { id: 3, parent_id: 1 },
  { id: 4, parent_id: 2 },
  { id: 5, parent_id: 4 },
];

setTree(comments)

// [ { id: 1, parent_id: null, children: [ [Object], [Object] ] } ]
```

1. `ascArr` 数组升序

该函数第一个参数传入一个数组， 返回升序的新数组。

```js
const ascArr = (arr) => arr.sort((a, b) => a - b)

ascArr([3, 2, 3, 4, 1])
// [ 1, 2, 3, 3, 4 ]
```

不足之处： sort()方法会改变原数组，默认按unicode码顺序排列

```js
通过ES6 ...展开运算符浅拷贝一份新数组

const ascArr = (arr) => [...arr].sort((a, b) => a - b)
```

1. `descArr` 数组降序

该函数第一个参数传入一个数组， 返回降序的新数组。

```js
const descArr = (arr) => [...arr].sort((a, b) => b - a)

descArr([3, 2, 3, 4, 1])
// [ 4, 3, 3, 2, 1 ]
```

1. `shuffle` 随机排序

`Fisher-Yates`算法随机排序数组的元素

```js
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]

```

1. `isFind` 查找数组符合条件的值

该函数第一个参数传入一个数组，第二个参数属性值，或者是一个函数，第三个符合条件的值，返回一个boolean值

```js
const isFind = (arr, fn, key) => !!arr.find(typeof fn === 'function' ? fn : val => val[fn] === key)

isFind([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o=> o.n === 6) 
// true

isFind([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n', 1)
// false
```

1. `cutOutLastArray` 截取最后长度数组

该函数传入一个数组，第二参数截取最后长度， 返回截取后数组所以元素。

```
const cutOutLastArray = (arr, n = 1) => arr.slice(0, -n);

// cutOutLastArray([1, 2, 3], 2)
// [1]
```

1. `cloneArray` 克隆数组

浅拷贝数组

```js
// ES6 ...
const cloneArray = (arr) => [...arr]

// ES6 Array.from
const cloneArray = (arr) => Array.from(arr)

// concat()
const cloneArray = (arr) => [].concat(arr)

// map()
const cloneArray = (arr) => arr.map((x) => x)

cloneArray([1,24]) // [1, 24]
```

1. `maxArray`最大值

该函数返回一组数中的最大值


```
const maxArray = (arr) =>  Math.max(...(arr.filter(Boolean)))

maxArray([1,2,3,4,5, null, NaN]) // 5
```

1. `minArray`最小值

该函数返回一组数中的最小值

```
const minArray = (arr) =>  Math.min(...(arr.filter(Boolean)))

minArray([1,2,3,4,5, null, NaN]) // 5
```

1. `validArray` 去除数组中的无效值

创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。

```
const compact = (arr) => arr.filter(Boolean)

// 示例
compact([0, 1, false, 2, '', 3])
// => [1, 2, 3]
```


## 对象

1. `isObjectEqual`检查两个对象各项相等

该函数传入两个数组，返回 Boolean。

```js
function isObjectEqual(obj1, obj2, has = true) {
  // 判断类型
  const o1 = obj1 instanceof Object;
  const o2 = obj2 instanceof Object;
  if (!o1 || !o2) return obj1 === obj2;
  // 判断长度
  const keys1 = Object.getOwnPropertyNames(obj1);
  const keys2 = Object.getOwnPropertyNames(obj2);
  if (keys1.length !== keys2.length) return false;
  // 各项对比
  for (let o in obj1) {
    let t1 = obj1[o] instanceof Object;
    let t2 = obj2[o] instanceof Object;
    if (t1 && t2) {
      has = diffByObj(obj1[o], obj2[o]);
    } else if (obj1[o] !== obj2[o]) {
      has = false;
      break;
    }
  }
  return has;
}
```

示例

```js
isObjectEqual({a: 2, b: 4 }, {b:4,a:2}) // true
isObjectEqual({a: 2,b:4, c: 6}, {b:4,a:2}) // false
```

1. 克隆对象

复制一份新的对象数据。

```js
// ES6 ...
const cloneObject = (obj, temp = {}) => temp = { ...obj }

// Object.assign()
const cloneObject = (obj) => Object.assign({}, obj)

const a = { x: 1, y: 1 };
const b = cloneObject(a); // a !== b
```

## 函数

1. `debounce` 函数防抖

在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

```js
/** *
 * 防抖
 * @parmas fn 回调函数
 * @parmas time 规定时间
 */
export const debounce = (function() {
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

debounce(fn, 1000)
```

1. `throttle` 函数节流

规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

```js
/** *
 * 节流(规定的时间才触发)
 * @parmas fn 结束完运行的回调
 * @parmas delay 规定时间
 */
export const throttle = (function() {
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

throttle(fn, 300)
```

1. `typeFn` 类型判断


```js
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

typeFn.String('1')
typeFn.Number(1)
typeFn.Boolean(false)
typeFn.Null(null)
typeFn.Array([1, 2])
typeFn.Object({a: 1})
typeFn.Function(()=>{})
```

## 字符串

1. `isNil` 是否是`null`或者`undefined`


```js
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```

1. `isUpperCase` 是否是大写开头字母

```js
const isUpperCase = str => str === str.toUpperCase();

isUpperCase('AbC'); // true
isUpperCase('Abc'); // true
isUpperCase('aB4'); // false
```

1. `isLowerCase` 是否是小写开头字母

```js
const isLowerCase = str => str === str.toLowerCase();

isLowerCase('AbC'); // false
isLowerCase('Abc'); // false
isLowerCase('aB4'); // true
```

1. `maskString` 遮住字符串

```
const maskString = (str, maskChar = "*") => str.slice(0, 4).padEnd(str.length, maskChar)

maskString("18659808664") // 1865*******
```



## 数字

1. 数字每隔三位数加分号

```js
const thousands = (num) => num.toString().replace(num.toString().indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(\d{3})+$)/g, '$1,')


thousands(12255555.2323) //12,255,555.2323
```

1. `randomNumber` 指定范围的随机整数

```js
const randomNumber = (min, max)=> Math.floor(Math.random() * (max - min + 1)) + min

randomNumber(0, 10) // 7
```

1. `calcFn` 加减乘除运算

因为 JavaScript 遵循 IEEE 754 数学标准，使用 64 位浮点数进行运算。在进行十进制运算时会导致精度丢失。

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
  divide() {
      let arg = Array.from(arguments);
      return arg.reduce((total, num) => {
          return accDiv(total, num);
      });
  }
}

//说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
//调用：accAdd(arg1, arg2)
//返回值：arg1加上arg2的精确结果
function accAdd(arg1, arg2) {
  var r1, r2, m;
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

//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
//调用：accMul(arg1,arg2)
//返回值：arg1乘以arg2的精确结果
function accMul(arg1, arg2) {
  var m = 0,
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

//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
//调用：accDiv(arg1,arg2)
//返回值：arg1除以arg2的精确结果
function accDiv(arg1, arg2) {
  var t1 = 0,
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

示例

```js
解决 0.1+0.2 !== 0.3 问题
//加法
calcFn.add(0.1, 0.2) // 0.3 

//减法
calcFn.sub(0.1, 0.2) // 0.1

//乘法
calcFn.add(0.2, 0.3) // 0.06

// 乘法
calcFn.add(0.1, 0.2) // 0.5
```


## 浏览器

1. `copyText` H5复制文本

```js
    if (!document.queryCommandSupported('copy')) { //为了兼容有些浏览器 queryCommandSupported 的判断
        console.log('浏览器不支持');
        return
    }
    let textarea = document.createElement("textarea")
    textarea.value = content
    textarea.readOnly = "readOnly"
    document.body.appendChild(textarea)
    textarea.select() // 选择对象
    textarea.setSelectionRange(0, content.length) //核心
    let result = document.execCommand("copy") // 执行浏览器复制命令
    if (result) {
        console.log("复制成功~")
    }
    textarea.remove()
```

1. `parse` 对象参数转为url参数

```js
/** *
 * 对象参数转为url参数
 * @parmas query 拼接得参数对象
 */
const parse = (query = {}) => {
    return Object.keys(query)
        .filter(key => !isEmpty(query[key]))
        .reduce((result, key) => {
            const value = query[key]
            // in查询特殊处理
            if (Array.isArray(value) && !isEmpty(value)) {
                return `${result}&${value.reduce((val, cVal) => `${val ? `${val}&` : val}${key}=${cVal}`, '')}`
            }

            // between查询做特殊处理
            if (typeof value === 'object' && !isEmpty(value)) {
                const [start, end] = value
                return `${result}&${key}[]=${start}&${key}[]=${end}`
            }

            return `${result}&${key}=${value}`
        }, '')
        .replace(/^&/, '?')
}
```

1. `getUrlQuery` 拆解url地址成为路由跳转参数


```js
/** *
 * 拆解url地址成为路由跳转参数
 */
function getUrlQuery(page) {
    let urlArr = String(page).split('?');
    let queryObj = {};
    urlArr[1] && urlArr[1].split('&').forEach(o => {
        let item = o.split('=');
        item[1] ? queryObj[item[0]] = item[1] : '';
    })
    return {
        path: urlArr[0],
        query: queryObj
    };
}
```

 1. `getCurrentURL` 获取当前的URL地址

 该函数返回当前页面的URL地址。
 
 
```
const getCurrentURL = () => window.location.href

getCurrentURL() //"https://qqlcx5.github.io/"
```

1. `scrollToTop` 返回顶部

平滑地滚动到当前页面的顶部。

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```

1. `smoothScroll` 平滑滚动页面

平滑滚动到浏览器窗口的可见区域

```
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
  
smoothScroll('#fooBar'); //平滑滚动到ID为fooBar的元素

smoothScroll （'.fooBar' ）;  //使用fooBar类平滑滚动到第一个元素
```


1. 禁止右键、选择、复制

```
['contextmenu', 'selectstart', 'copy'].forEach((o) =>
  document.addEventListener(o, (event) => (event.returnValue = false))
);
```

 1. `isCurrentPage` 是否是当前页面

该函数返回浏览器选项卡是否是用户在浏览

```js
isCurrentPage = () => !document.hidden
isCurrentPage() // true
```

## 环境

1. `isBrowser` 是否是浏览器

该函数返回当前运行时环境是否为浏览器
 
```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

// isBrowser(); // true (browser)
// isBrowser(); // false (Node)
```

1. `isWechatBrowser`判断微信浏览器还是普通h5

```
const isWechatBrowser = (() => {
  let ua = navigator.userAgent.toLowerCase();
  return /micromessenger/.test(ua)
})();

isWechatBrowser // false
```

1. `isMobile`判断是否是移动端

```
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

isMobile() // true
```
