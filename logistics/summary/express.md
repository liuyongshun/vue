### 1.简单服务器
```
var express = require('express');
var app = express();

// app.get 或app.post 设置各种请求方式。
// 该处的路径是虚拟的路径不是本地文件的路径,如果设置（/user）,则通过（http://localhost:3000/user）访问该接口。

app.get('/', function(req, res) {
  // send（string|object）或render（视图模板引擎）或sendFile（.txt|.html）
  res.send('hello world');
});

app.listen(3000)
```
### 2.坑与深入理解

1.加载静态文件。
```
目录结构：
|——public
|  |——css
|  |——js
|     |——jquery.js
|——js
|  |——jquery.js
|——html
|  |—— zz.html
|——index.html
|——index.js

问题1：正确访问文件

// 启动如下服务器，index.html 里直接<script src="js/jquery.js"></script>，访问localhost:3000/in 路径，发现得不到jquery。

// 处理方式，把js和css都放到一个public文件内。加上代码：app.use(express.static('public'));

// app.use有点类似全局变量。当你指定app.use(express.static('public'));时。后面的get，post等都是去public里查询相应的文件。

// 服务器代码
const express = require('express');
const app = express();
// app.use(express.static('public'));

app.get('/in', function(req, res) {
     res.sendFile(__dirname + '/index.html')
});

app.listen(3000, () => {
  console.log('Listening on: http://localhost:3000');
});

问题2： 路由匹配与引入文件的路径关系。

// 注意： 在上面的服务器中，无论是index.html 还是html/zz.html。如果想通过<script src="js/jquery.js"></script>正确找到文件。必须保证两件事情。

// 1: app.use(express.static('public'));
// 2:app.get()的虚拟路径必须是一层（/user），不能是多层（/user/id）。如果是多层设置，则需要相对定位找到正确的位置。

问题3：app.use的作用。
如上，app.use(express.static('public'));使下面的app.get()响应去public里查找样式文件，如果在写个app.post(),同样会去public查找。后面的路由匹配都基于此。

加一个：
app.use(/admin, function (req, res, next) {
    console.log(req.originalUrl); // '/admin/in'
    console.log(req.baseUrl); // '/admin'
    console.log(req.path); // '/new'
    next();
})

首先：如果没有next()，程序会被挂起。浏览器访问时一直转圈。
当加上上面这个use时，如果你app.get(/admin/in, function (req, res) {})时，将会触发上面的console.log。但是app.get(/in, function (req, res){})则不会触发。

app.use会给所有/admin和/admin下的子目录接口进行打印操作。

```

### 3.next()钩子函数
```
app.use(function(req,res,next){
    console.log('111');
    next();
    console.log('222');
});

app.use(function(req,res,next){
    console.log("333");
    next();
});

结果：
111
333
222
```
