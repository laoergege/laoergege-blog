## MongoDB window服务安装
1. 下载 [MongoDB](https://docs.mongodb.com/)
2. 创建 data 等文件夹以及相应文件 

![](http://upload-images.jianshu.io/upload_images/3368741-b643e3457b33702e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![](http://upload-images.jianshu.io/upload_images/3368741-7502736be3f9cd10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 3.6版本以上 注意是 .cfg 文件

![](http://upload-images.jianshu.io/upload_images/3368741-66392588a72fae88.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

3. 配置 MongoDB 作为window服务启动
编辑刚刚创建好的 mongodb.cfg 文件。

```
logpath=D:\data\log\mongodb.log
logappend=true
dbpath=D:\data\db
port=27017
serviceName=MongoDB
serviceDisplayName=MongoDB
bind_ip=127.0.0.1
```

更多[配置详情](https://my.oschina.net/pwd/blog/399374)

4. 安装服务

> 注意要用超级管理员权限

```
.\mongod.exe -f "your config" --install
``` 

5. 启动服务

```
net start MongoDB
```

或者进入window图形化服务管理页面

![](http://upload-images.jianshu.io/upload_images/3368741-be0e4d30308101fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

6.  开启安全认证
打开命令行进入 mongo shell
```
mongo
```

切换到admin数据库
```
use admin
```

添加超级管理员
```
db.createUser(
  {
    user: "name",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)
```

添加成功后，mongodb.conf 添加配置
auth=true

重新window管理页面 启动服务。

7.  验证

![](http://upload-images.jianshu.io/upload_images/3368741-649d4c46d028d2f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在没用户认证前，你是不能任何都会报错的。

利用db.auth("uername","password")

![](http://upload-images.jianshu.io/upload_images/3368741-f11a199017827402.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

也可以在进入mongo shell时认证
mongo "localhost/admin" -u "laoergege" -p "laoergege" --authenticationDatabase 		"admin"

角色说明：
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

另附两遍参考教程
http://www.cnblogs.com/hanyinglong/p/5704320.html
http://www.jianshu.com/p/a4e94bb8a052