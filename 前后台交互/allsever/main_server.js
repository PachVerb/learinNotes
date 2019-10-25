const http = require('http');
const fs = require('fs');
const urlLib = require('url');
const query = require('querystring');

http.createServer((req, res) => {
    //get
    let _urlobject = urlLib.parse(req.url, true);
    let GET = _urlobject.query;
    let _pathname = _urlobject.pathname;    // www/aaa/xxx.txt
    
    //post
    let date = '';
    req.on('data', (data) =>{
        date += data;
    });
    req.on('end', () => {
        console.log(query.parse(date));
    });

    //文件读取
    let fileUrl = './www' + req.url;   //请求文件地址
    fs.readFile(fileUrl, (err, data) => {
        if(err) res.write('404');
        res.write(data);
        res.end();
    });

    console.log(1);
}).listen(80);

console.log(Buffer.alloc(10,1));