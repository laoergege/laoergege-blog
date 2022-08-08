- nginx
  - 配置文件结构
  - location
  - proxy_pass
    - 反向代理

## 配置文件结构

```
http {
    server {
        # 块指令开头，如 location 
		location / {  # 块指令
		    root /data/www; # 简单指令： `[key] [value];`
		}
		
		
		location /images/ {
		    root /data;
		}
		
    }
}
```

## location

路径匹配规则：

1. 如果有多个匹配的location块，nginx 将选择前缀最长的块

## proxy_pass

### 反向代理

```conf
server {  
  listen       8080;        
  server_name  localhost;

  location / {
      root   html; # Nginx默认值
      index  index.html index.htm;
  }
  
  proxy_pass http://localhost:8000; # 反向代理配置，请求会被转发到8000端口
}
```