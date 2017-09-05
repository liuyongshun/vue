### 一、参数默认值、rest、拓展运算
1、
```
function setValue (x, y = 'World') {
  console.log(x, y); // undefined "World"
  y = 'modify value';
  console.log(y); // modify value
}
setValue();

// 参数变量是默认声明的，let或const再次声明报错（let和const不允许多次声明，var可以）
function f (y = 1) {
  let y = 3;
}
f();
```

1.2
非尾部的参数设置默认值，实际上这个参数是没法省略的。如果传入undefined，将触发默认值，null没有该效果。

```
function f (x = 1, y) {
  return [x, y];
}
f(); // [1, undefined]
f(2); // [2, undefined])
f( , 1); //  报错
f(undefined, 1); // [1, 1]

// 指定默认值后，函数的length属性，将返回没有指定默认值的参数个数。指定了默认值后，length属性将失真。
function f (x, y = 1) {
  console.log(arguments.length); // 0
  return [x, y];
}
f()

// rest 参数也不会计入length属性。
function f (x, y = 1, ...arg) {
  console.log(arguments.length); // 1
  return [x, y];
}

f(2);

```

3、rest。 "...变量名" 用于获取函数的多余参数，rest后不能有其他参数。
```
// rest参数之后不能再有其他参数

function add (...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
  return sum;
}
console.log(add(2, 5, 3)); // 10
```

4、拓展运算  "..." ，将数组转化为用都好分开的参数。
```
function add (x, y) {
  return x + y;
}
var numbers = [4, 38];
console.log(add(...numbers)); // 42
```

### 二、解构赋值

1、函数参数解构顺序，优先实参，其次参数默认值，再次是变量解构默认值
```
function foo ({x, y = 5}) {
  console.log(x, y);
}
foo({}); // undefined 5
foo({x: 1}); // 1 5
foo({x: 1, y: 2}); // 1 2
foo(); // error
```

2、
下面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。；

```
// 写法一
function m1 ({x = 0, y = 0} = {}) {
  return [x, y];
}
// 写法二
function m2 ({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}
console.log(m1()); // [0, 0]
console.log(m2()); // [0, 0]

// x 和 y 都无值的情况
m1({}); // [0, 0];
m2({}); // [undefined, undefined]

// x 有值， y 无值的情况
m1({x: 3}); // [3, 0]
m2({x: 3}); // [3, undefined]

```

### 三、作用域

- 执行环境：执行环境定义了变量或函数有权访问的其他数据。函数都有自己的执行环境，全局执行环境是 window 对象
- 变量对象：环境中定义的所有变量和函数都保存在这个对象中。
- 作用域链：保证对执行环境有权访问的所有变量和函数的有序访问。
- 活动对象：在最开始时只包含一个变量，即 arguments 对象（这个对象在全局环境中是不存在的）。

1、
**参数默认值是一个变量，则该变量所处的作用域，与其他变量的作用域规则是一样的，即先是当前函数的作用域，然后才是全局作用域。**

```
var x = 1;
function f (x, y = x) {
  console.log(y);
}
f(2); // 2

// 首先x和y都在f函数的作用域内，所以y=x，不会去找全局的x。因为先声明了x,后执行了y=x,等同于:
let x; 
y = x;
所以二者皆为undefined。不抛出错误。
var x = 1;
function f (x, y = x) {
  console.log(y); // undefined
  console.log(x); // undefined
}
f();

// 首先x和y都在f函数的作用域内，所以y=x，不会去找全局的x。但是由于先执行y=x,后声明x，等同于:
y = x;
let x; 
在声明x前执行了y = x的操作，所以抛出错误。
var x = 1;
function f (y = x, x) { // error: x is not defined
  console.log(y);
  console.log(x);
}
f();

// ps:只有var具有声明提升的效果，但是参数声明，let，const是没有提升效果的，所以：
y = x;
var x;
这是不会报错的。但是其他是不行的。
```

2、
**分析：y的默认值是匿名函数，声明时，foo函数的作用域还没有形成。该匿名的作用域前端是foo的活动对象即argments部分。下一部分就是全局作用域。该匿名无法访问foo环境内的变量。**

```
var x = 1;
function foo (x, y = function () { console.log(x); }) {
  console.log(x); // 该x是参数x，作用域链先查到argments的x，不是全局x。
  x = 3;          // 重写了参数x。
  y();            // 因为参数x被重新赋值，所以此时输出3
  console.log(x); // 同理为3
}
foo(7); // 3
```

### 四、ES6函数写法

1、箭头函数

1.函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
2.不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
3.不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 Rest 参数代替。
4.不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
5.由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。

```
var getTempItem = id => ({ id: id, name: 'Temp' });
console.log(getTempItem());
```
S
/**
 * this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，
 * 导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。
 * 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target
 */
// 箭头函数导致this总是指向(函数定义生效:用call调用对象才使this生效，调用别的则不行)时所在的对象（本例是{id: 42}），所以输出的是42。
function foo () {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}
var id = 21;
foo.call({});
console.log(id);

/**
 * 尾调用：某个函数的最后一步是调用另一个函数
 * 函数调用：函数调用会在内存形成一个 “ 调用记录 ” ，又称 “ 调用帧 ” （ call frame ），保存调用位置和内部变量等信息。
 * 如果在函数 A 的内部调用函数 B ，那么在 A 的调用帧上方，还会形成一个 B 的调用帧。
 * 等到 B 运行结束，将结果返回到 A ， B 的调用帧才会消失。如果函数 B 内部还调用函数 C ，那就还有一个 C 的调用帧。
 * 所有的调用帧，就形成一个 “ 调用栈 ” （ call stack ）
 */
// 不是尾调用，g(x)其实还有一个默认操作，return undefined
function f (x) {
  g(x);
}
f(3);
// 尾调用优化，如果函数 g 不是尾调用，函数 f 就需要保存内部变量 m 和 n 的值、 g 的调用位置等信息。
// 但由于调用 g 之后，函数 f 就结束了，所以执行到最后一步，完全可以删除 f(x)  的调用帧，只保留 g(3)  的调用帧。
function f () {
  let m = 1;
  let n = 2;
  return g (m + n);
}
f();
//  等同于
function f() {
  return g(3);
}
f();
//  等同于
g(3);
