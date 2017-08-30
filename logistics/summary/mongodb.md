### 配置mogodb数据库

- 下载安装对应的mogodb。
- 选择位置（根目录）创建data文件夹，内部创建db文件夹。
- cmd中进到mongod安装位置下bin目录内，输入下面命令指定路径。您的路径包含空格，请将整个路径以双引号括起来。看到waiting for connections on port 27017 时，说明mongo服务器，然后在打开另一个cmd命令提示符，输入mongod连接mongoDB。

`"D:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath d:\data\db`
`"D:\Program Files\MongoDB\Server\3.4\bin\mongo.exe`

- 如上有个问题，就是每次都需要启动，且打开多个命令提示符。所以我们把它添加为window的服务，且让它自动启动。
- win + x 找到命令提示符（**管理员**，win10系统）打开。添加到window的方式有两种。

1.第一种：通过`--config`

 - 任意位置新建一个mongod.cfg文件，内容如下。路径自己写对。
```
systemLog:
    destination: file
    path: c:\data\log\mongod.log
storage:
    dbPath: c:\data\db
```

- 执行`mongod.exe --config "E:\data\mongo.cfg" --install --serviceName "mongodb"`。 --serviceName是添加到window服务的服务名。

2.第二种：直接命令行设置

`mongod.exe--dbpath=d:\mongodb\data\db --logpath=d:\mongodb\data\log\log.txt  --install --serviceName "MongoDB" `

### 查看：

配置完后，检查是否成功。

1. win + r 输入services.msc 回车，打开服务管理。
2. 找到你添加的服务名字，可以通过首字母简单搜索。
3. 如果有则说明添加成功，右键——属性——启动类型——自动，这样就一劳永逸了。
4. 以后只需在bin文件内，用命令行输入mongo即可启动mongodb了。亦可以创建快捷键到桌面。

**note1：**如果没设置自动，你可以打开命令提示符，输入 net start "服务名"，相反停止是 net stop "服务名"

**note2：**如果你觉得服务名字太垃圾，想换掉：win + x **管理员**命令提示符，然后输入sc delete "服务的名字"

**note3：**如果遇到端口冲突了，你可输入 `netstat -ano` 查看端口占用情况。
