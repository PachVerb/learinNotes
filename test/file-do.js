//文件操做
//
const http = require('http');
const fs = require('fs')	//文件系统模块

//fs.readFile(),fs.writeFile()

//读取文件

fs.readFile('a.txt', function(err,data){
	console.log(err)	//null
	if(err){

	}else{
		console.log(data.toString());
	}
});