```
const path = require('path');

module.exports = {
  entry: "./app/entry",
  // array : 两个入口文件，最后合并输出为一个文件。
  entry: ["./app/entry1", "./app/entry2"], 
  // object: 两个入口文件，最后输出两个文件。
  entry: {
    a: "./app/entry-a",
    b: ["./app/entry-b1", "./app/entry-b2"]
  },

// 一般来说入口文件都是一个。

  output: {

    // 输出路径
    path: path.resolve(__dirname, "dist"), 

    /**
     * 文件名三种输出方式
     * 1. 指定名称
     * 2. 和入口文件名相同
     * 3. 哈希值输出
     */
    filename: "bundle.js",
    filename: "[name].js",
    filename: "[chunkhash].js",

    // 该路径会指定webpackDevServer的监听路径，引用时可能是：<link href="/assets/spinner.gif" />
    publicPath: "/assets/",

    // the filename template for additional chunks
    chunkFilename: "[id].js",
    chunkFilename: "[chunkhash].js",

    // 编写输出文件的SourceMap选项时使用。
    sourceMapFilename: "[file].map",
    sourceMapFilename: "sourcemaps/[file].map"

  },

  module: {

    rules: [
       // 配置各类加载器。
      {
        test: /\.jsx?$/,
        // 各类解析加载器作用的文件。
        include: [
          path.resolve(__dirname, "app")
        ],
        // 不许要作用的文件。
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],
        // 各类加载器
        loader: "babel-loader",

        // 选项配置
        options: {
          presets: ["es2015"]
        }

      },

      {
        test: /\.html$/,

        use: [
          // 进行多个配置
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              /* ... */
            }
          }
        ]
      }
    ],
    // 无需解析的内容
    noParse: [
      /special-library\.js$/
    ]
  },

  resolve: {
    // 用来解析模块请求，例如设置请求的别名，但不会解析加载器

    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css"],
    // 设置别名，可以用别名代替长路径
    alias: {

      // 别名即可代表"module" -> "new-module" 也可代表 "module/path/file" -> "new-module/path/file"
      "module": "new-module",

      // // $限定了别名，只能代表 "only-module" -> "new-module", 而不能代表 "module/path/file" -> "new-module/path/file"
      "only-module$": "new-module",
      
    },

    alias: [
      {
        name: "module",

        alias: "new-module",

        onlyModule: true
        // if true only "module" is aliased
        // if false "module/inner/path" is also aliased
      }
    ]
  },

  // 源文件遍历，方便调试。
  devtool: "source-map", // enum

  // 指定webpack根目录（绝对路径）
  context: __dirname, 

  // 打包时的一些信息展示，样式。
  stats: "errors-only",
  stats: {
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,
    // ...
  },

  // 开发环境的web服务器，基于express搭建
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    // 服务器启动，监听的路径设置
    contentBase: path.join(__dirname, 'public'), 
    // 压缩代码
    compress: true,
    historyApiFallback: true,
    // 模块热替换，依赖于HotModuleReplacementPlugin
    hot: true,
    https: false,
    noInfo: true
  },

  // 各类插件的使用
  plugins: [
    // ...
  ],

  resolveLoader: { /* same as resolve */ }
  // separate resolve options for loaders

  parallelism: 1, // number
  // limit the number of parallel processed modules

  profile: true, // boolean
  // capture timing information

  bail: true, //boolean
  // fail out on the first error instead of tolerating it.

  cache: false, // boolean
  // disable/enable caching

  watch: true, // boolean
  // enables watching

  watchOptions: {
    aggregateTimeout: 1000, // in ms
    // aggregates multiple changes to a single rebuild

    poll: true,
    poll: 500, // intervall in ms
    // enables polling mode for watching
    // must be used on filesystems that doesn't notify on change
    // i. e. nfs shares
  },

  node: {
    // Polyfills and mocks to run Node.js-
    // environment code in non-Node environments.

    console: false, // boolean | "mock"
    global: true, // boolean | "mock"
    process: true, // boolean
    __filename: "mock", // boolean | "mock"
    __dirname: "mock", // boolean | "mock"
    Buffer: true, // boolean | "mock"
    setImmediate: true // boolean | "mock" | "empty"
  }

}
```
