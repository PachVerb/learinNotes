const http = require('http');
const fs = require('fs')

let server = http.createServer(function(req, res){
	let file_name = './www' + req.url;	//请求文件地址

	fs.readFile(file_name,'utf-8', function(err, data){
		if(err) throw err;
		res.write(data);
		//console.log(data);
		res.end();
	});
	
})

server.listen(80);