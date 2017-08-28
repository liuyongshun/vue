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
    sourceMapFilename: "sourcemaps/[file].map", 

    crossOriginLoading: "use-credentials", // enum
    crossOriginLoading: "anonymous",
    crossOriginLoading: false,
    // specifies how cross origin request are issued by the runtime

    /* Expert output configuration (on own risk) */
  },

  module: {
    // configuration regarding modules

    rules: [
      // rules for modules (configure loaders, parser options, etc.)

      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ],
        // these are matching conditions, each accepting a regular expression or string
        // test and include have the same behavior, both must be matched
        // exclude must not be matched (takes preferrence over test and include)
        // Best practices:
        // - Use RegExp only in test and for filename matching
        // - Use arrays of absolute paths in include and exclude
        // - Try to avoid exclude and prefer include

        issuer: { test, include, exclude },
        // conditions for the issuer (the origin of the import)

        enforce: "pre",
        enforce: "post",
        // flags to apply these rules, even if they are overridden (advanced option)

        loader: "babel-loader",
        // the loader which should be applied, it'll be resolved relative to the context
        // -loader suffix is no longer optional in webpack2 for clarity reasons
        // see webpack 1 upgrade guide

        options: {
          presets: ["es2015"]
        },
        // options for the loader
      },

      {
        test: /\.html$/,

        use: [
          // apply multiple loaders and options
          "htmllint-loader",
          {
            loader: "html-loader",
            options: {
              /* ... */
            }
          }
        ]
      },

      { oneOf: [ /* rules */ ] },
      // only use one of these nested rules

      { rules: [ /* rules */ ] },
      // use all of these nested rules (combine with conditions to be useful)

      { resource: { and: [ /* conditions */ ] } },
      // matches only if all conditions are matched

      { resource: { or: [ /* conditions */ ] } },
      { resource: [ /* conditions */ ] },
      // matches if any condition is matched (default for arrays)

      { resource: { not: /* condition */ } }
      // matches if the condition is not matched
    ],

    /* Advanced module configuration (click to show) */

    noParse: [
      /special-library\.js$/
    ],
    // do not parse this module

    unknownContextRequest: ".",
    unknownContextRecursive: true,
    unknownContextRegExp: /^\.\/.*$/,
    unknownContextCritical: true,
    exprContextRequest: ".",
    exprContextRegExp: /^\.\/.*$/,
    exprContextRecursive: true,
    exprContextCritical: true,
    wrappedContextRegExp: /.*/,
    wrappedContextRecursive: true,
    wrappedContextCritical: false,
    // specifies default behavior for dynamic requests
  },

  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ],
    // directories where to look for modules

    extensions: [".js", ".json", ".jsx", ".css"],
    // extensions that are used

    alias: {
      // a list of module name aliases

      "module": "new-module",
      // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"

      "only-module$": "new-module",
      // alias "only-module" -> "new-module", but not "module/path/file" -> "new-module/path/file"

      "module": path.resolve(__dirname, "app/third/module.js"),
      // alias "module" -> "./app/third/module.js" and "module/file" results in error
      // modules aliases are imported relative to the current context
    },
    /* alternative alias syntax (click to show) */
    alias: [
      {
        name: "module",
        // the old request

        alias: "new-module",
        // the new request

        onlyModule: true
        // if true only "module" is aliased
        // if false "module/inner/path" is also aliased
      }
    ],

    /* Advanced resolve configuration (click to show) */

    symlinks: true,
    // follow symlinks to new location

    descriptionFiles: ["package.json"],
    // files that are read for package description

    mainFields: ["main"],
    // properties that are read from description file
    // when a folder is requested

    aliasFields: ["browser"],
    // properites that are read from description file
    // to alias requests in this package

    enforceExtension: false,
    // if true request must not include an extensions
    // if false request may already include an extension

    moduleExtensions: ["-module"],
    enforceModuleExtension: false,
    // like extensions/enforceExtension but for module names instead of files

    unsafeCache: true,
    unsafeCache: {},
    // enables caching for resolved requests
    // this is unsafe as folder structure may change
    // but performance improvement is really big

    cachePredicate: (path, request) => true,
    // predicate function which selects requests for caching

    plugins: [
      // ...
    ]
    // additional plugins applied to the resolver
  },

  performance: {
    hints: "warning", // enum
    hints: "error", // emit errors for perf hints
    hints: false, // turn off perf hints
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },

  devtool: "source-map", // enum
  devtool: "inline-source-map", // inlines SourceMap into original file
  devtool: "eval-source-map", // inlines SourceMap per module
  devtool: "hidden-source-map", // SourceMap without reference in original file
  devtool: "cheap-source-map", // cheap-variant of SourceMap without module mappings
  devtool: "cheap-module-source-map", // cheap-variant of SourceMap with module mappings
  devtool: "eval", // no SourceMap, but named modules. Fastest at the expense of detail.
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.

  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory

  target: "web", // enum
  target: "webworker", // WebWorker
  target: "node", // Node.js via require
  target: "async-node", // Node.js via fs and vm
  target: "node-webkit", // nw.js
  target: "electron-main", // electron, main process
  target: "electron-renderer", // electron, renderer process
  target: (compiler) => { /* ... */ }, // custom
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  externals: ["react", /^@angular\//],
  externals: "react", // string (exact match)
  externals: /^[a-z\-]+($|\/)/, // Regex
  externals: { // object
    angular: "this angular", // this["angular"]
    react: { // UMD
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    }
  },
  externals: (request) => { /* ... */ return "commonjs " + request }
  // Don't follow/bundle these modules, but request them at runtime from the environment

  stats: "errors-only",
  stats: { //object
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,
    // ...
  },
  // lets you precisely control what bundle information gets displayed

  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    // ...
  },

  plugins: [
    // ...
  ],
  // list of additional plugins


  /* Advanced configuration (click to show) */

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
  },

  recordsPath: path.resolve(__dirname, "build/records.json"),
  recordsInputPath: path.resolve(__dirname, "build/records.json"),
  recordsOutputPath: path.resolve(__dirname, "build/records.json"),
  // TODO

}
```
