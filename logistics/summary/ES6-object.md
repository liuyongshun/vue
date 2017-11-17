### 一、属性简写

- 属性值等于属性名所代表的变量或函数（属性名必须与变量名相同）
- 简介写法的属性名总是字符串，所以不存在关键字。

```
var foo = 'bar';
function obj() {
  return this.foo
}
var zz = {
  foo,
  obj,
  // 同： method: function(){}
  method () {
    return 2;
  },
  class () {
    return 6;
  }
};

console.log(zz)
console.log(zz.class())  // 6
```

应用：

```
function method1 () {console.log(3)}
function method2 () {}
function method3 () {}
module.exports = {method1, method2, method3}
```

### 新增

- Object.is() 只要两个值是一样的，它们就应该相等
- `===` 不能正确处理NaN 和 +0  -0

```
console.log(Object.is(+0, -0))  // false
console.log(Object.is(NaN, NaN))  // true
console.log(+0 === -0)  // true
console.log(NaN === NaN) // false
```

### 二、属性名表达式

```
let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
```

### Object.assign()合并对象(浅拷贝)

**这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错。**

```
var obj = { a: 1 };
var obj2 = { b: 2 };
var obj3 = { c: 3 };
Object.assign(obj, obj2, obj3);
obj // {a:1, b:2, c:3}
```

### 三、属性枚举

for...in | JSON.stringify() | Object.assign() 会忽略enumerable为false的属性，且for...in会返回继承的属性

```
遍历属性：
（ 1 ） for (key in obj) {}

（ 2 ） Object.keys(obj)
// Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）。

（ 3 ） Object.getOwnPropertyNames(obj)
// Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）。

（ 4 ） Object.getOwnPropertySymbols(obj)
// Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性。

（ 5 ） Reflect.ownKeys(obj)
// Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管是属性名是 Symbol 或字符串，也不管是否可枚举。

// 以上都遵守同样的属性遍历的次序规则。

首先遍历所有属性名为数值的属性，按照数字排序。
其次遍历所有属性名为字符串的属性，按照生成时间排序。
最后遍历所有属性名为 Symbol 值的属性，按照生成时间排序。
```

###  Object.values() ， Object.entries() ，Object.keys()

```
var obj = { foo: "bar", baz: 42 };
console.log(Object.keys(obj)) // [ "foo", "baz" ]
console.log(Object.values(obj)) // [ "bar", 42 ]
console.dir(Object.entries(obj)) // [ ["foo", "bar"], ["baz", 42] ]

```
