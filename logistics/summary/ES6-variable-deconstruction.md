### 一、块级作用域：

1、有块级作用域，导致外部无法访问到i
```
let numChunkScope = 5;
for (let i = 0; i < 10; i++) {}
console.log(i); // not defined
```

```
let arrByES6 = [];
for (let i = 0; i < 10; i++) {
  arrByES6[i] = function () {
    console.log(i);
  };
}
arrByES6[6](); // 6
```

无块级作用域
```
var num = 2;
for (var i = 0; i < 10; i++) {}
console.log(i); // 10
```

```
var arrByES5 = [];
for (var i = 0; i < 10; i++) {
  arrByES5[i] = function () {
    console.log(i);
  };
}
arrByES5[6](); // 10
```

// 问题3：
// 只要块级作用域内存在let命令，它所声明的变量就“绑定”这个区域，不再受外部的影响。
// var tmp = 123;
// if (true) {
//   tmp = 'abc';
//   // do not have "let tmp", the result is 123;
//   let tmp;
//   console.log(tmp);
// }

// 参数x默认值等于另一个参数y，而此时y还没有声明，属于 ” 死区 “，所以报错
// function bar (x = y, y = 2) {
//   return [x, y];
// }
// bar();

// 问题4：
// let const 不允许重复声明变量,而且let声明的不属于window
// function ss () {
//   let a = 10;
//   var a = 1;
// }

// 常量（不可更改）
// const NUM_STABLE = 1;

// 二、变量解构：

// 数组解构赋值,等号的右边不是数组(或者严格地说，不是可遍历的结构)将会报错。================================
// 1、数组解构赋值
// var [a, b, , c] = [1, 2, 3, 6];
// let [d, [[e], f]] = [1, [[2], 3]];
// let [g, ...h] = [1, 2, 3, 4];
// let [i, [j], k] = [1, [2, 3], 4];
// const [x, y, ...z] = ['a'];

// console.log('a:' + a + ';' + typeof a);
// console.log('b:' + b + ';' + typeof b);
// console.log('c:' + c + ';' + typeof c);
// console.log('d:' + d + ';' + typeof d);
// console.log('e:' + e + ';' + typeof e);
// console.log('f:' + f + ';' + typeof f);
// console.log('g:' + g + ';' + typeof g);
// console.log('h:' + h + ';' + typeof h);
// console.dir(h);
// console.log('i:' + i + ';' + typeof i);
// console.log('j:' + j + ';' + typeof j);
// console.log('k:' + k + ';' + typeof k);
// console.log('x:' + x + ';' + typeof x);
// console.log('y:' + y + ';' + typeof y);
// console.log('z:' + z + ';' + typeof z);
// console.dir(z);

// 2、默认值:
// 左侧赋值则为默认值，右侧再次赋值会覆盖，但是undefined不能覆盖。
// let [x, y = 'b', z = 33, m = 11] = ['a', undefined, 'cover', null];
// console.log(x, y, z, m);

// 3、对象解构赋值
// 注意：数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名(如果变量不同名字，则匹配模式需要相同，用+++++++++标出的内容)
// var { bar, foo } = { foo: 'aaa', bar: 'bbb' };
// console.log(foo);
// console.log(bar);
// +++++++++对象的解构赋值是下面形式（键值对）的简写,f和l变成了变量。
// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;
// console.log(f + ' ' + l);
// console.log(first); // 这里eslint提示错误，未定义first。对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
// 注意：let命令下面一行的圆括号是必须的，否则会报错。因为解析器会将起首的大括号，理解成一个代码块，而不是赋值语句。
// let get;
// ({get} = {get: 1});
// console.log(get);

// 4、字符串，布尔解构
// const [a, b, c, d, e] = 'hello';
// console.log(a, b, c, d, e);
// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
// let {toString: s} = 123;
// console.log(s);
// console.log(s === Number.prototype.toString);
// 解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

// 5、函数参数的解构赋值
// function add ([x, y]) {
//   return x + y;
// }
// console.log(add([1, 2]));

// 6、圆括号：可以使用情况只有一种：赋值语句的非模式部分，可以使用圆括号。

// 三、变量解构用途
// 1、变量交换
// let x = 3;
// let y = 5;
// let judge = true;
// if (judge) {
//   [x, y] = [y, x];
//   console.log(x, y);
// }

// // 2、函数返回多个值
// function example () {
//   return [1, 2, 3];
// }
// var [a, b, c] = example();
// console.log(a, b, c);

// // 3、作为函数参数
// function foo ({a, b, c}) {
//   console.log(a, b, c);
// }
// foo({a: 3, b: 2, c: 8});

// 4、提取json
// var jsonData = {
//   id: "42",
//   status: "OK",
//   data: [867, 5309]
// };
// let { id, status, data: number } = jsonData;
// export {
//   numChunkScope,
//   num,
//   NUM_STABLE
// };

// 5.遍历 Map 结构
// var map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');
// for (let [key, value] of map) {
//   console.log(key + ' is ' + value);
// }
// for (let [, value] of map) {
//   console.log(value);
// }
// for (let [key] of map) {
//   console.log(key);
// }
// const arr = ['apple', 'pen', 'apple-pen'];
// console.log(arr.map(word => word[0].toUpperCase() + word.slice(1)));

// function upperFirst (word) {
//   // console.log(word);
//   console.log(word.slice(1));
//   return word[0].toUpperCase() + word.slice(1);
// }

// function wordToUpperCase (arr) {
//   return arr.map(upperFirst);
// }

// console.log(wordToUpperCase(['apple', 'pen', 'apple-pen']));
