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
