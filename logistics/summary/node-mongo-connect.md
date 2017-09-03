### node服务连接mongo数据库

1. 首先要有安装好mongodb数据，如mongodb的教程那样。
2. 启动数据库，进入你想存储数据的那个集合。（登录数据的用户，以获得操作数据库的权限）
3. 在某个文件内创建server.js，并执行npm init初始化一个package.json

```
var MongoClient = require('mongodb').MongoClient;
// 因为mongo设置了安全账户，所以需要权限登录。(liu:0902)
// mongoose.connect('mongodb://username:password@host:port/database?options...');

// 将数据插入到es6集合内容。
var DB_URL = 'mongodb://liu:0902@127.0.0.1:27017/es6';

var insertData = function (db, callback) {
  var collection = db.collection('es6');
  var data = [{'name': 'liu', 'url': 'www.cheatlys.info'}, {'name': 'yong', 'url': 'www.cheatlys.info'}];
  collection.insert(data, function (err, result) {
    if (err) {
      console.log('Error:' + err);
      return;
    }
    callback(result);
  });
};

MongoClient.connect(DB_URL, function (err, db) {
  if (err) {
    console.log('Error:' + err);
    return;
  }
  insertData(db, function (result) {
    console.log(result);
    db.close();
  });
});

```

4.`npm install mongodb --save-dev` 安装mongodb包。

5.node启动server.js就会自动将data的内容写入数据，上面只是给数据库添加数据的方法，而且启动就添加，并没太大实际用处。

