**Tips:看到这篇文章时不要急着从上到下一路跟着走，不然会被坑。**

### 配置mogodb数据库

- 下载安装对应的mogodb。
- 选择位置（根目录）创建data文件夹，内部创建db文件夹。
- cmd中进到mongod安装位置下bin目录内，输入下面命令指定路径。**您的路径包含空格，请将整个路径以双引号括起来。**看到waiting for connections on port 27017 时，说明mongo服务启动。

```
// 命令提示符1：指定数据库路径
D:\Program Files\MongoDB\Server\3.4\bin\mongod --dbpath d:\data\db

// 命令提示符2：启动mongo数据库
D:\Program Files\MongoDB\Server\3.4\bin\mongo
```

![](http://or0drint7.bkt.clouddn.com/2345%E6%88%AA%E5%9B%BE20170901212014.jpg)

- 然后在打开另一个cmd命令提示符，进入bin目录下，输入mongod连接mongoDB，输入mongo之后你就可以用show dbs查看数据库，以及使用数据库。

### 一劳永逸,改进启动方式

**如上有个问题，就是每次使用都需要启动，且打开多个命令提示符不能关闭。所以，为了方便，我们把它添加为window的服务，且让它自动启动。**

1、win + x 找到命令提示符（**管理员**，win10系统）打开。添加到window的方式有两种。

**1.1 第一种：通过`--config`**

 - 任意位置新建一个mongod.cfg文件，内容如下。cfg中指定的数据库和日志的路径自己写对。
```
systemLog:
    destination: file
    path: c:\data\log\mongod.log
storage:
    dbPath: c:\data\db
```

- 执行`mongod.exe --config "E:\data\mongo.cfg" --install --serviceName "mongodb"`。 --serviceName是添加到window服务的服务名。

**1.2第二种：直接命令行设置**

```
mongod.exe--dbpath=d:\mongodb\data\db --logpath=d:\mongodb\data\log\log.txt  --install --serviceName "MongoDB" 
```
### 查看服务：

配置完后，检查是否成功。

1. win + r 输入services.msc 回车，打开服务管理。
2. 找到你添加的服务名字，可以通过首字母简单搜索。
3. 如果有则说明添加成功，右键——属性——启动类型——自动，这样就一劳永逸了。
4. 以后只需在bin文件内，用命令行输入mongo即可启动mongodb了。亦可以创建快捷键到桌面。

![](http://or0drint7.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20170830225039.png)

### 改进服务：

**上面都是基础必备的，但是mongodb的3.x(3.0以上)的版本，加入了安全权限访问控制。所以，如果按照上面的来，你就会遇到下面的问题，当然也有可能你会看别人的文章时，遇到了下面的问题。弹出权限警告**

```
C:\Users\hs>"C:\Program Files\MongoDB\Server\3.4\bin\mongo.exe
MongoDB shell version v3.4.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.1
Server has startup warnings:
2017-01-12T21:19:46.941+0800 I CONTROL  [initandlisten]
2017-01-12T21:19:46.942+0800 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-01-12T21:19:46.942+0800 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2017-01-12T21:19:46.942+0800 I CONTROL  [initandlisten]
```

**解决方法：**

**note1：**如果没设置自动，你可以打开命令提示符，输入 net start "服务名"，相反停止是 net stop "服务名"

**note2：**如果你觉得服务名字太垃圾，想换掉：win + x **管理员**命令提示符，然后输入sc delete "服务的名字"

**note3：**如果遇到端口冲突了，你可输入 `netstat -ano` 查看端口占用情况。
