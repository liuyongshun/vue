## node模块
** Node与浏览器、W3C组织、CommonJS组织、ECMAScript之间的关系**

![](http://or0drint7.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20170823220022.png)

### 一、CommonJS的模块规范

**CommonJS对模块定义：模块引用、模块定义、和模块标识。**

#### 1.模块引入

`var math = require('math');`

- 优先缓存，不论核心模块还是文件模块，require()方法的二次加载都是优先缓存加载。

模块引入要经历三个步骤：

1. 路径分析
2. 文件定位
3. 编译执行

**路径分析：**
node中模块分核心模块(node提供)和文件模块(用户编写)两类。对于核心模块，在node源码中编进了二进制文件，所以引入时省略到后两步，且速度快。文件模块是运行时动态加载的，需要完整的路径分析，文件定位，编译执行过成。

**ruquire()方法只接受标识符做为参数，node标识符有以下几类。**

- 核心模块http、fs、path
- . 或.. 开始的相对路径模块
- 以/开始的绝对路径模块
- 非路径形式的文件模块

（1）如果参数字符串以“/”开头，则表示加载的是一个位于绝对路径的模块文件。比如，require('/home/marco/foo.js')将加载/home/marco/foo.js。

（2）如果参数字符串以“./”开头，则表示加载的是一个位于相对路径（跟当前执行脚本的位置相比）的模块文件。比如，require('./circle')将加载当前脚本同一目录的circle.js。

（3）如果参数字符串不以“./“或”/“开头，则表示加载的是一个默认提供的核心模块（位于Node的系统安装目录中），或者一个位于各级node_modules目录的已安装模块（全局安装或局部安装）。

（4）如果参数字符串不以“./“或”/“开头，而且是一个路径，比如require('example-module/path/to/file')，则将先找到example-module的位置，然后再以它为参数，找到后续路径。

（5）如果指定的模块文件没有发现，Node会尝试为文件名添加.js、.json、.node后，再去搜索。.js件会以文本格式的JavaScript脚本文件解析，.json文件会以JSON格式的文本文件解析，.node文件会以编译后的二进制文件解析。

#### 1.1路径分析
```
// index.js
console.log(module.paths)

输出：
[ 'C:\\Users\\liuyongshun\\Desktop\\node_modules',
  'C:\\Users\\liuyongshun\\node_modules',
  'C:\\Users\\node_modules',
  'C:\\node_modules' ]
```

1. 当前目录下的node_modules
2. 父目录下的node_modules
3. 父目录的父目录下的node_modules

**note:**类似于作用域链的原理，因此路径越深，耗时越长。require()优先请求node_modules文件下的内容，而后才是自定义的模块。

#### 1.2文件定位

二次引入时，优先缓存，或省略掉路径分析，和文件定位。
```
// 删除指定模块的缓存
delete require.cache[moduleName];

// 删除所有模块的缓存
Object.keys(require.cache).forEach(function(key) {
  delete require.cache[key];
})

// 缓存是根据绝对路径识别模块的，如果同样的模块名，但是保存在不同的路径，require命令还是会重新加载该模块。
```

- 文件定位时拓展名分析
CommonJS规范允许标识符中不含拓展名，Node会按.js、.json、.node的次序补足，依次尝试。在尝试过程中调用fs模块同步阻塞式地判断文件是否存在。

- 文件定位时目录分析和包

&#x3000;&#x3000;require()通过分析文件拓展名之后，没找到对应文件但得到一个目录（node_modules基本都是目录，各类npm的插件）此时会将目录当做包处理。
&#x3000;&#x3000;在这过成中，node首先在当前目录下查找package.json（CommonJS包规范定义的包描述文件），通过JSON.parse()解析出包描述对象，进行文件定位。从中取出main属性指定文件进行定位。如果没有或没有package.json，则将index做为默认文件名，依次查找，index.js,index.json,index.node

#### 1.3 模块编译

编译和执行是引入模块的最后阶段。定位到文件后，node会新建一个**模块对象**，然后根据路径载入并编译。

- .js 通过fs模块同步读取文件后编译执行。
- .node 通过dlopen()方法加载。
- .json 通过fs同步读取，用JSON.parse()解析，返回结果。
- 其他被当.js文件载入。

每个编译成功的模块都会将其文件路径最为索引缓存在Module._cache对象上，以提高二次引入的性能。

node编译过成中对JavaScript进行了头尾包装。
```
头部：
 (function (exports, require, module, __filename, __dirname) {\n 
    // content
尾部：
 \n});

 // 包装后的结果，避免了污染全局变量
 (function (exports, require, module, __filename, __dirname) {
    var math = require('math');
    exports.area = function (radius) {
        return Math.PI * radius * radius;
    };
})
```
这样每个模块都进行了作用域隔离，之后通过vm的原生模块的方法执行，并返回一个function对象。最后将模块的exports，require()，module以及文件定位中得到的完整路径做为参数传递给这个function


**note：**

CommonJS模块的加载机制是，输入的是被输出的值的拷贝。也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。

```
// lib.js
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};
```

```
// main.js
var counter = require('./lib').counter;
var incCounter = require('./lib').incCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3
```
