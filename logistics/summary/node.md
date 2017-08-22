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
导出模块：
module.exports.f = ...
简写：
exports.f = ...

一个新的值被赋值给 exports，它就不再绑定到 module.exports
exports = { hello: false };  // 不导出，只在模块内有效
```

#### `module`不是全局的，而是每个模块本地的。

```
function Module(id, parent) {
    this.id = id;
    this.exports = {};
    this.parent = parent;
    if (parent && parent.children) {
        parent.children.push(this);
    }
    this.filename = null;
    this.loaded = false;
    this.children = [];
}

// console.log(module) 能打印module属性。
// module.children 该模块引用的模块对象。
```

#### `require()`

```
// path是node的核心模块之一，可以直接引入。
require('path');
```

#### `console`

- 类似于web浏览器提供的console。
- 一个 Console 类，包含 console.log() 、 console.error()方法，可以被用于写入到任何 Node.js 流。
- 一个全局的 console 实例，可被用于写入到 process.stdout 和 process.stderr。且使用时无需调用 require('console')。

```
// console类
const myConsole = new console.Console(out, err);
myConsole.log('hello world');

// console全局
console.log('hello world');
```

#### `process`

- Windows系统下，环境变量是不区分大小写的
- 对于node对象始终可用，无需require()
```
// 返回 Node.js 进程当前工作的目录
console.log(process.cwd());

// 返回一个包含用户环境信息的对象。
console.log(process.env);

// process.env 比较常用。但用的是它可以修改的特性。通过改写，可以切换生产和开发环境
process.env.foo = 'development';
console.log(process.env.foo);

// process.env中新增一个属性，会将属性值转换成字符串
process.env.test = null;
console.log(process.env.test);  // 'null'
```

其他全局：

- setTimeout(callback, delay[, ...args])
- setInterval(callback, delay[, ...args])
- clearInterval(intervalObject)
- clearTimeout(timeoutObject)

关于node的退出状态码：
- 0 : 正常退出。
- 1 : 未捕获的异常。
- 2 : 无用的。
- 3 : 内部的js解析错误。
- 5 : 严重错误，不可恢复。
- 6 : 内部处理程序功能异常。
- 7 : 内部异常处理程序运行时失败。
- 9 : 非法参数。
