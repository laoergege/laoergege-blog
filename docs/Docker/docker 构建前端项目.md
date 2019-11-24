```
FROM node:10.16.3

ENV NODE_ENV production

COPY . .

RUN npm config set registry https://registry.npm.taobao.org && npm install && npm run build

EXPOSE 80
```

```
laoergege@DESKTOP-6LK9S92:/mnt/d/project/xyl-admin$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED              SIZE 
xly-admin           1.0.0               3031cdfe3054        About a minute ago   884MB
<none>              <none>              815ec28c68be        11 minutes ago       677MB
<none>              <none>              99a8010ec3e1        19 minutes ago       671MB
<none>              <none>              bab3e92e6be8        43 minutes ago       908MB
<none>              <none>              a041d302d801        48 minutes ago       908MB
nginx               latest              ab56bba91343        6 days ago           126MB
node                10.16.3             636ef87129d6        7 days ago           904MB
node                8.11.3              ed145ef978c4        14 months ago        673MB
node                8.0.0               065e283f68bd        2 years ago          667MB
```

### 利用镜像缓存机制提高 docker 镜像构建时间

```
laoergege@DESKTOP-6LK9S92:/mnt/d/project/xyl-admin$ docker build -t xly-admin:1.0.0 .
Sending build context to Docker daemon  6.132MB
Step 1/6 : FROM node:8.11.3
 ---> ed145ef978c4
Step 2/6 : COPY ./package.json .
 ---> f941cf3f46c1
Step 3/6 : RUN npm config set registry https://registry.npm.taobao.org && npm install     
 ---> Running in 083a4f49438e
npm WARN deprecated bfj-node4@5.3.1: Switch to the `bfj` package for fixes and new features!
npm WARN deprecated circular-json@0.3.3: CircularJSON is in maintenance only, flatted is its successor.

> node-sass@4.12.0 install /node_modules/node-sass
> node scripts/install.js

 ...省略...

added 1408 packages in 42.277s
Removing intermediate container 083a4f49438e
 ---> 927c886a635a
Step 4/6 : COPY . .
 ---> 735bd021e5e0
Step 5/6 : RUN npm run build
 ---> Running in 69878e30adec

> xyl-admin@3.8.0 build /
> node build/build.js

- building for production...
 
 ...省略...

Removing intermediate container 69878e30adec
 ---> b71dd3eb269d
Step 6/6 : EXPOSE 80
 ---> Running in 83fc4360f563
Removing intermediate container 83fc4360f563
 ---> a8e197cd1643
Successfully built a8e197cd1643
Successfully tagged xly-admin:1.0.0
```

```
laoergege@DESKTOP-6LK9S92:/mnt/d/project/xyl-admin$ docker build -t xly-admin:1.0.0 .
Sending build context to Docker daemon  6.132MB
Step 1/6 : FROM node:8.11.3
 ---> ed145ef978c4
Step 2/6 : COPY ./package.json .
 ---> Using cache
 ---> f941cf3f46c1
Step 3/6 : RUN npm config set registry https://registry.npm.taobao.org && npm install     
 ---> Using cache
 ---> 927c886a635a
Step 4/6 : COPY . .
 ---> Using cache
 ---> 735bd021e5e0
Step 5/6 : RUN npm run build
 ---> Using cache
 ---> b71dd3eb269d
Step 6/6 : EXPOSE 80
 ---> Using cache
 ---> a8e197cd1643
Successfully built a8e197cd1643
Successfully tagged xly-admin:1.0.0
```

### 多阶段构建