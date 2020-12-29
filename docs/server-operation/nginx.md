* 搭建LNMP环境（CentOS 7）- [阿里云文档](https://help.aliyun.com/document_detail/97251.html?spm=a2c4g.11186623.6.972.865e73772eyJrN)
* 反向代理配置
  ```
  ## Basic reverse proxy server ##
    upstream server1  {
        server localhost:8080; 
    }

    ## Start ##
    server {
        listen 80;
        server_name  www.bestlifebestyue.com;

        root   html;
        index  index.html index.htm index.php;

        location / {
            proxy_pass  http://server1;

            #Proxy Settings
            proxy_redirect     off;
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
            proxy_max_temp_file_size 0;
            proxy_connect_timeout      90;
            proxy_send_timeout         90;
            proxy_read_timeout         90;
            proxy_buffer_size          4k;
            proxy_buffers              4 32k;
            proxy_busy_buffers_size    64k;
            proxy_temp_file_write_size 64k;
        }
    }
  ```
* 指定靜态资源路径
    ```
        #root与alias主要区别在于nginx如何解释location后面的uri，这会使两者分别以不同的方式将请求映射到服务器文件上。
        #root的处理结果是：root路径＋location路径
        #alias的处理结果是：使用alias路径替换location路径
        #alias是一个目录别名的定义，root则是最上层目录的定义。
        location /static/ {
            alias /home/www/;
            index index.html index.htm;
        }
    ```
