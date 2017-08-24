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

- 文件定位时拓展名分析
CommonJS规范允许标识符中不含拓展名，Node会按.js、.json、.node的次序补足，依次尝试。在尝试过程中调用fs模块同步阻塞式地判断文件是否存在。

- 文件定位时目录分析和包

&#x3000;&#x3000;require()通过分析文件拓展名之后，没找到对应文件但得到一个目录（node_modules基本都是目录，各类npm的插件）此时会将目录当做包处理。
&#x3000;&#x3000;在这过成中，node首先在当前目录下查找package.json（CommonJS包规范定义的包描述文件），通过JSON.parse()解析出包描述对象，进行文件定位。

#### 1.3 模块编译

编译和执行是引入模块的最后阶段。定位到文件后，node会新建一个模块对象，然后根据路径载入并编译。

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
