### 一、html-webpack-plugin

1、自动化生产项目中的html。

- 在开发环境中，会生产到内存里，保证index.html和引入的bundle.js相互关联。
- 在打包过程中，通过template指定html，将该html打包到dist里（打包输出的bundle.js会自动引入到html里），最后上传到服务器。
- `<%= htmlWebpackPlugin.options.date %>该方式是js模版引擎的用法，等号直接取值`在html中用该语法，可以访问webpack.conf.js内plugin内的HtmlWebpackPlugin的date数据。
- minify 对html进行压缩。详细配置查看官网。

```
index.html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8"/>
    // 注意； htmlWebpackPlugin的开头h小写
    <title><%= htmlWebpackPlugin.options.title %></title>
    // 该方式会把entry的名字mian的js引入，该配置需要设置plugins里的HtmlWebpackPlugin的inject:false;不然会重复引用（即使是hash值也可以，这样就能自由引入到任何位置），
    <script src="<%= htmlWebpackPlugin.files.chunks.main.entry %>"></script>
    </head>
  <body>
  <%= htmlWebpackPlugin.options.date %>
  // 这里会打印出相关文件内容。
  <% for (var key in htmlWebpackPlugin.files) { %>
  <%= key %> : <%= JSON.stringify(htmlWebpackPlugin.files[key]) %>
  <% } %>
  // 该方式会把entry的名字ccc的js引入
  <script src="<%= htmlWebpackPlugin.files.chunks.ccc.entry %>"></script>
</body>
</html>


```

```
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      // 打包后的文件名
      filename: 'index.html',
      template: 'index.html',
      // js注入位置，用'head'则插入到head标签内，true插入到body内。
      inject: true,
      title: 'dddddd',
      date: 'ddd',
      minify: {
        // 删除注释
        removeComments: true,
        // 删除空格
        collapseWhitespace: true,
        // 删除属性引号
        removeAttributeQuotes: true
      },
    }),
  ]
};

```

### 二、各类加载器loader。

file-loader，url-loader处理图片，limit使小于10k的图片，转化为base64编码。大于的则直接加载。

note:单独用的时候可能会无效，（我的后来设置了html-loader后生效了。）

```
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:7].[ext]'
            }
          }
        ]
      }
```


### 三、
