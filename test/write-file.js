const fs = require('fs');

//写内容到文件
fs.writeFile('b.txt','asdfasdfasdff', function(err){
	if(err){
		console.log('写入失败');
	}
})