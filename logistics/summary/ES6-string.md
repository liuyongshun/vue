### ES6对String的拓展
> JavaScript字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。且length的长度会变为2。

#### 1、字符码值
**NOTE:** 对于四个字节的特殊字，length的长度会变为2，charAt()无法使用。charCodeAt(0)也不正确。

```
var s = "𠮷a";
console.log(s.length) // 3
```

**for of 正确识别**

```
for (variable of s) {
    console.log(variable);
}
// 虽然length是3，但是for of 值遍历了两次。
// 𠮷 a
```

**codePointAt(0)正确返回码值。codePointAt(1)不是。codePointAt(3)是a**

```
console.log(s.codePointAt(0))  // 134071
console.log(s.codePointAt(1))  // 57271
console.log(s.codePointAt(2))  // 97
```

#### 2、检测字符
2.1 String.startsWith(str, index)  str:必选（被检索的字符串）index:可选（从何位置检索）。返回布尔值
```
var str = 'Hello world!';
str.startsWith('Hello')
```

2.2 String.endsWith(str, index)  str:必选（被检索的字符串）index:可选（针对前面的位置）。返回布尔值
```
var str = 'Hello world!';
str.endsWith('world!')

str.endsWith('o', 5) // true
str.endsWith('o', 6) // false
```

2.3 String.includes(str, index)  str:必选（被检索的字符串）index:可选（从何位置检索）。返回布尔值
```
var str = 'Hello world!';
str.includes('world!')
```

#### 3、字符串

**ES5中，经常会拼接字符串。ES6的字符串模版在一定程度上简化了字符串拼接。**

1. 字符串模版必须用用反引号（`）.
2. 反引号可以换行，保存空格（html格式）
3. 可以用字符串的trim()方法去掉空格
4. 变量、表达式、对象属性、函数放到${}内。

```
var zzz = 333;
document.getElementById('result').innerHTML = `
<h3>${zzz}</h3>
<div>${zzz}</div>
`;
```

**上面只是简单的用了字符串拼接，对于模版还可以更深入。**

#### 4、字符串补全长度的功能（es7）

第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

```
// padStart(): 在开始处补全
console.log('x'.padStart(5, 'ab'));  // 'ababx'
// padEnd():在结尾处补全
console.log('x'.padEnd(5, 'ab'));  // 'xabab'
```

#### 字符串转换为数组

```
var str = 'hello';
[...str]
```