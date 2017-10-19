### set

- 类似于数组，但是成员的值都是唯一的，没有重复的值。
- Set 函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。 

```
var s = new Set();

[2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));
for (let i of s) {
console.log(i); // 2 3 4 5
}

console.log(s) {2, 3, 4, 5}
```
