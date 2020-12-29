---
sidebarDepth: 2
---
阿里云centos_7_3_64
## 1. 在本机生成一份公钥和密钥，已经生成的可以跳过
```
ssh-keygen
```
## 2. 上传公钥至服务器
两种方式
1. 命令上传
```
ssh-copy-id ***@***.***.**.*
```
2. 手动拷贝

    将本机~/.ssh/id_rsa.pub里的内容，拷贝到服务器上的~/.ssh/authorized_keys里