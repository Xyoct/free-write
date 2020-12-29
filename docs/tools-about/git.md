---
sidebarDepth: 2
---
## git常用命令
* 添加远程url：`git remote add <名称> <url>`
* 修改远程url：`git remote origin set-url [url]`
* 切换分支：`git checkout <分支名>`
* 切换分支，本地没有即创建新分支：`git checkout -b <分支名>`
* 修改远程url：先删后加：`git remote rm origin && git remote add origin [url]`
* 修改远程url：直接改config文件
* 查看用户名和邮箱：`git config user.name && git config user.email`
* 设置用户名和邮箱：`git config --global user.name "Your Name && git config --global user.email you@example.com`
* 大小写是否敏感  false为敏感：`git config core.ignorecase <Boolean>`
* 使用helpershi免除重复输入密码：`git config --global credential.helper store`

## 代码仓库配置ssh密钥
1. 生成SSH秘钥: `$ ssh-keygen -t rsa -C <account email>`，摁三回车不设置密码（并不是git登录密码），最后得到了两个文件：id_rsa（私钥）和id_rsa.pub（公钥）
2. gitHub或gitlab网站上设置秘钥（id_rsa.pub里面的数据）