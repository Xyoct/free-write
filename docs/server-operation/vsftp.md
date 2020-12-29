---
sidebarDepth: 2
---
阿里云centos_7_3_64
## 1.卸载
* 查看当前server中的vsftpd
` rpm -qa|grep vsftpd`
::: tip 显示结果：
vsftpd-2.2.2-13.el6_6.1.x86_64
:::
* 运行卸载
`rpm -e vsftpd-2.2.2-13.el6_6.1.x86_64`
::: tip 提示：
卸载时自己主动备份vsftp的用户列表文件
:::
* 删除文件
`rm -rf /etc/vsftpd`
* 查看vsftpd是否还在开机启动项中
`chkconfig --list`
* 查看vsftpd执行状态
`service vsftpd status`
::: tip 返回结果:
vsftpd: unrecognized service（无法识别vsftpd。说明卸载了vsftpd了）
:::

## 2.安装
`yum -y install vsftpd`

## 3.配置

::: tip vsftpd的主配置文件的内容
-----------------/etc/vsftpd/vsftpd.conf START---------------------------------------
* anonymous_enable=NO
* local_enable=YES
* write_enable=YES
* local_umask=022
* #anon_upload_enable=YES
* #anon_mkdir_write_enable=YES
* dirmessage_enable=YES
* xferlog_enable=YES
* connect_from_port_20=YES
* #chown_uploads=YES
* #chown_username=whoever
* #xferlog_file=/var/log/xferlog
* xferlog_std_format=YES
* idle_session_timeout=600
* data_connection_timeout=120
* #nopriv_user=ftpsecure
* #async_abor_enable=YES
* ascii_upload_enable=YES
* ascii_download_enable=YES
* ftpd_banner=Welcome to lightnear FTP service.
* #deny_email_enable=YES
* #banned_email_file=/etc/vsftpd/banned_emails
* chroot_local_user=YES
* #chroot_list_enable=YES
* #chroot_list_file=/etc/vsftpd/chroot_list
* ls_recurse_enable=YES
* listen=YES
* #listen_ipv6=YES
* pam_service_name=vsftpd
* userlist_enable=YES
* userlist_deny=NO
* #设置FTP用户能够訪问的主文件夹（假设该文件夹不存在，能够创建并改动权限）
* local_root=/var/ftp
* tcp_wrappers=YES
* use_localtime=YES
---------------------/etc/vsftpd/vsftpd.conf END------------------------------------
:::

## 4.基本操作

* ls 列出远程机的当前目录

* cd 在远程机上改变工作目录

* lcd 在本地机上改变工作目录

* ascii 设置文件传输方式为ASCII模式

* binary 设置文件传输方式为二进制模式

* close 终止当前的ftp会话

* hash 每次传输完数据缓冲区中的数据后就显示一个#号

* get（mget） 从远程机传送指定文件到本地机

* put（mput） 从本地机传送指定文件到远程机

* open 连接远程ftp站点

* ? 显示本地帮助信息

* ! 转到Shell中


* 添加FTP账户
`useradd ftpadmin -s /sbin/nologin`
* 给ftpadmin设置password`passwd ******`输入两遍password就可以


* 创建FTP根文件夹
`mkdir /var/ftp`
* 假设上述文件夹已经存在，仅仅须要改动权限就可以
`chown -R ftpadmin /var/ftp && chmod -R 755 /var/ftp`

暂时先这样吧，后续有时间再加……