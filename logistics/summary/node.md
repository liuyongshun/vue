**前言**

&#x3000;&#x3000;用webpack的话，node知识是必不可少的，需要掌握node知识，语法，模块，全局变量等。当然既然写代码，就一定要有规范，不然就显得杂乱无章。

### 一、NODE（js）规范

规范一般都带有个人风格，下面是个参照。

- 缩进2个空格。
- 声明变量var不能省略。
- `+-*/=%`等符号，前后各一个空格。
- 大括号不必另起一行，if条件前后有空格。
```
// good
if (true) {
    // statement
}

// bad
if (true)
{
    // statement
}
```
- 尽量采用单引号，避免不必要的转义。
- 数组内逗号后带一个空格。`['js', 'css']`
- 尽量保持行尾添加分号。
- 变量命名采用小驼峰命名法，只有第一个单词首字母不大写。
- 方法命名采用小驼峰命名法，尽量采用动词或判断类。
- 类名采用大驼峰命名法，所有首字母大写。
- 常量命名，全大写，并用下划线分割。
- `=== 代替 ==`
- `for in 用于对象`
- 异步回调第一个参数是错误提示。
- 版本记录的hook，实现代码检测。

### 二、NODE全局变量

#### 1、可以全局访问，但不是全局对象

#### `__dirname`

```
// index.js
console.log(__dirname);

同上：
// path.dirname() 必须传参数
var path = require('path');
console.log(path.dirname(__filename));

输出：
// node index.js  ： 输出当前模块所在目录
E:\git\node
E:\git\node
```

#### `__filename`

```
console.log(__filename);

输出：
E:\git\node\index.js
```

#### `exports`

```

```
