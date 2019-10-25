//require引入模块,如下引入http模块搭建一个服务器。
const http = require('http');

//使用http模块的createServe,创建一台服务器

//requst   输入 客服端请求数据
//response 响应 服务器输出

let http_server = http.createServer(function(req,res){
	//console.log(req.url)
	switch(req.url){
		case '/1.html':
			res.write('success,1.html');
			break;
		case '/2.html':
			res.write('success,2.html');
			break;
		default:
			res.write('404');
			break;
	}

	//res.write('hello');	//返回数据
	res.end();	//结束响应
});

//端口，多种服务的访问入口，类似id
//监听，一台服务器能提供多种服务，比如邮件服务，游戏服务，数据库服务

 http_server.listen(8080);	//服务器响应 返回 hello






