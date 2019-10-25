# kill进程,解决服务端口占用
1.netstat -ano 查端口使用情况
命令行列出端口占用的进程，PID是重点，后面kill进程需要
2.netstat -ano|findstr "80" 查看某个端口占用情况，比如 80
3.taskkill /im soft.exe /f kill占用端口的进程

PS:kill node:  tskill node  (cmd)

#服务端问题
Provisional headers are shown 这个错误表示请求没有发送出去
出错原因4
.服务器出错或者超时，没有真正的返回。client发送请求后，由于各种原因，比如网络延迟，server端逻辑错误，导致client端长时间未收到响应。解决方案：改正占用很长时间的server端程序。

>实列：我当时出错了，原因是我们有正常返回数据到客服端（浏览器）

