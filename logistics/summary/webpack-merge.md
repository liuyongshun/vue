### 一、webpack-merge

1、
```
var merge = require('webpack-merge')
var obj = {
  name: 'liu'
}
var obj2 = {
  sex: 'man'
}
var zz = merge(obj2,obj);
console.log(zz) // { sex: 'man', name: 'liu' }

```

2、

```
var merge = require('webpack-merge')
var obj = {
  name: 'liu',
  sex: 'women'
}
var obj2 = {
  sex: 'man'
}

var zz = merge.multiple(obj2, obj);
console.log(zz)  // [ 'women', 'liu' ]

```

### 二、friendly-errors-webpack-plugin 识别webpack错误。

```
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

// 在webpack plugins里使用。
var webpackConfig = {
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
}
```

```
// 关闭错误提示
app.use(require('webpack-dev-middleware')(compiler, {
  quiet: true,
  publicPath: config.output.publicPath,
}));

如果用dev-server，关闭方式如下
{
  devServer: {
    quiet: true
  },
}
```
