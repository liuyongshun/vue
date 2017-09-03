### mongodb命令
- use : 转换集合，若没有则创建
- show dbs : 显示所有的集合
- 创建用户，权限管理
```
db.createUser(
...   {
...     user: "dba",
...     pwd: "dba",
...     roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
...   }
... )
```

- 用户登录

```
db.auth('liu','123')
```

- `db.abc.insert({"a":1,"b":2})` abc是集合名，插入数据
- `db.abc.find()`  展示查看abc集合内的数据
- `show users`  查看当前库下的用户
- ` db.system.users.find().pretty()`  查看所有的用户
