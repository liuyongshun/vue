**Tips:如果你是3.0以上的用户，看到这篇文章时不要急着从上到下一路跟着走，不然会被坑。请简单通读**

### 配置mogodb数据库

- 下载安装对应的mogodb。
- 选择位置（根目录：e、f、d盘等根目录）创建data文件夹，内部创建db文件夹。
- cmd中进到mongod安装位置下bin目录内，输入下面命令指定路径。**您的路径包含空格，请将整个路径以双引号括起来。**看到waiting for connections on port 27017 时，说明mongo服务启动。

```
// 命令提示符1：指定数据库路径
D:\Program Files\MongoDB\Server\3.4\bin\mongod --dbpath d:\data\db

// 命令提示符2：启动mongo数据库
D:\Program Files\MongoDB\Server\3.4\bin\mongo
```

![](http://or0drint7.bkt.clouddn.com/2345%E6%88%AA%E5%9B%BE20170901212014.jpg)

- 然后在打开另一个cmd命令提示符，进入bin目录下，输入mongod连接mongoDB，输入mongo之后你就可以用show dbs查看数据库，以及使用数据库。

-------------------------------------------------------------------------

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

1、首先，分割线以上保持不变。启动mongodb。

2、创建一个有grant权限的帐号，即：账号管理的授权权限。帐号是跟着库走的，所以在指定库里授权，必须也在指定库里验证(auth)。

3、转到admin，执行db.createUser。换行用 ctrl + enter。

```
> use admin
switched to db admin
> db.createUser(
...   {
...     user: "userName",
...     pwd: "password",
...     roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
...   }
... )

```

参数role：

```
    1. 数据库用户角色：read、readWrite;
    2. 数据库管理角色：dbAdmin、dbOwner、userAdmin；
    3. 集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManager；
    4. 备份恢复角色：backup、restore；
    5. 所有数据库角色：readAnyDatabase、readWriteAnyDatabase、userAdminAnyDatabase、dbAdminAnyDatabase
    6. 超级用户角色：root  可以授权，可以任意操作集合。
    // 这里还有几个角色间接或直接提供了系统超级用户的访问（dbOwner 、userAdmin、userAdminAnyDatabase）
    7. 内部角色：__system
```

具体：

```
Read：允许用户读取指定数据库
readWrite：允许用户读写指定数据库
dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问system.profile
userAdmin：允许用户向system.users集合写入，可以找指定数据库里创建、删除和管理用户
clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关函数的管理权限。
readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限
readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读写权限
userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的userAdmin权限
dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的dbAdmin权限。
root：只在admin数据库中可用。超级账号，超级权限
```

3.1 当设置了用户后，重启mongo，执行show dbs发生如下错误：

![](http://or0drint7.bkt.clouddn.com/auth.png)

3.2需先执行权限验证。如下。步骤1: use admin。步骤2：db.auth('userName','password')

![](http://or0drint7.bkt.clouddn.com/7.png)

3.3 虽然show dbs这回可以用了。但是其他的数据库还是不行的。刚刚建立的 userAdminAnyDatabase 角色，用来管理用户，可以通过这个角色来创建、删除用户。验证：需要开启auth参数。

4、 给其他数据库创建权限，例如给test创建账户权限。

```
> use test        // 在test库里创建帐号
switched to db test
> db.createUser(
...     {
...       user: "test",
...       pwd: "123456",
...       roles: [
...          { role: "read", db: "test" }    // 只读帐号，只能查看，不能改写
...       ]
...     }
... )
> db.createUser(
...     {
...       user: "test1",
...       pwd: "654321",
...       roles: [
...          { role: "readWrite", db: "test" }   // 读写帐号,可读，可写
...       ]
...     }
... )
> show users;     // 查看当前库下的用户
{
    "_id" : "test.zjyr",
    "user" : "zjyr",
    "db" : "test",
    "roles" : [
        {
            "role" : "read",
            "db" : "test"
        }
    ]
}
```

4.1 进入每个集合时都要验证用户，才能对应的触发权限。

4.2 查看创建的所有数据库的帐号：db.system.users.find().pretty()

4.3 因为帐号都是在当前需要授权的数据库下授权的，如上面在admin里创建了userName指定的db也是admin。如果进行如下操作：

```
> db
admin  // 在admin集合中创建其他集合的账户。
> db.createUser(
...  {
...    user: "test",
...    pwd: "789",
...    roles: [
...       { role: "readWrite", db: "test" }  // 在admin库下创建test集合的帐号
...    ]
...  }
... )

// 在admin下创建的帐号，不能直接在其他库验证。
> use test
switched to db test
> db.auth('test','789')
Error: 18 Authentication failed.

// 只能在帐号创建库下认证，再去其他库进行操作。
> use admin
switched to db admin 
> db.auth('test','789')
1
> use test
switched to db test
> db.test.insert({"a":1111,"b":2222})
```

5、添加到window的服务这里的操作发生了改变。`--port`无所谓了，主要是增加了`--auth`，非常重要。

```
"D:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --auth --port 27017 --config "D:\Program Files\MongoDB\Server\3.4\mongod.cfg" --serviceName "MongoDB"
```

6、window添加完毕后就不必每次都启动两个cmd命令提示符了。直接启动mongo，在对应的集合验证用户即可。

-----------------------------------------------------------------

**note1：**如果没设置自动，你可以打开命令提示符，输入 net start "服务名"，相反停止是 net stop "服务名"

**note2：**如果你觉得服务名字太垃圾，想换掉：win + x **管理员**命令提示符，然后输入sc delete "服务的名字"

**note3：**如果遇到端口冲突了，你可输入 `netstat -ano` 查看端口占用情况。
