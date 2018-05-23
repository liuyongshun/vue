### Iterator

#### 一、 原生具备Iterator 接口的数据

**本质上，遍历器是一种线性处理，对于任何非线性的数据结构，部署遍历器接口，就等于部署一种线性转换。**


- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象


#### 二、默认调用Iterator接口

1、解构赋值

```
let set = new Set().add('a').add('b').add('c');
let [x,y] = set;

```

2、扩展运算符

```
var str = 'hello';
[...str]

```

3、yield*
4、

```
for...of
Array.from()
Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
Promise.all()
Promise.race()

```

#### 三、for in 与for of

1、for...in

数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
某些情况下，for...in循环会以任意顺序遍历键名。
for...in循环主要是为遍历对象而设计的，不适用于遍历数组。

2、for...of

for (let value of arr) {
  console.log(value);
}

可以与break、continue和return配合使用。
可直接遍历node节点。
提供了遍历所有数据结构的统一操作接口。

3、forEach()

不可以与break、continue和return配合使用。
不可直接遍历node节点，需搭配call调用。