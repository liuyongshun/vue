### 一、Array.from() 

- 将类数组转化为数组

```
let arr = {
'0': 'a',
'1': 'b',
'2': 'c',
length: 3
};
// ES5 的写法
var arr1 = [].slice.call(arr); // ['a', 'b', 'c']
// ES6 的写法
let arr2 = Array.from(arr); // ['a', 'b', 'c']

对于document.querySelectorAll()返回的节点集合和argments均可。
```

- 将字符串转为数组，然后返回字符串的长度。可以避免 JavaScript 将大
于\uFFFF的 Unicode 字符，算作两个字符的 bug 。

```
function countSymbols(string) {
return Array.from(string).length;
}
```

### 二、Array.of()

- 将一组值，转换为数组

Array.of用来避免Array()或new Array()的问题。

```
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]

Array.of(undefined) // [undefined]
Array.of(1, 2) // [1, 2]
```

### 三、find() 和 findIndex() 

1、find(); 返回第一个满足条件的值，没有undefined。回调三个参数，当前值，当前索引，原数组

```
var ARR = [1, 4, 7, 33];
console.log(ARR.find(function(value, index, arr) {
  // console.log(value);
  // console.log(index);
  // console.log(arr);
  return value > 20;
}));
```

2、findIndex() 同上，只不过是返回了第一个的索引。能够识别NaN.

```
[NaN].findIndex(e => Object.is(NaN, e))
```

### 四、fill（）

- 填充数组，三个参数，填充内容，开始位置，结束位置。可以用来清空数组任意位置内容。

```
console.log(['a', 'b', 'c'].fill('', 1, 2)); // ["a", "", "c"]
```

### 五、includes() 返回布尔值

- 参数二：搜索的起始位置，默认为 0 。如果为负数，则表示倒数的位置,代替indexOf()

``` 
[1, 2, 3].includes(2); 
```
