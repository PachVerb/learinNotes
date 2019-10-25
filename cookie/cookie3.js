const http = require('http');
const express = require('express');

let serve = express();
serve.listen(80);

serve.use('/', (req, res) => {
    //签名密钥,s%3AshanShan.vmkMEDfPYNwIgNSTKILK0N0O5xNQjYgWfFZ9q4OhN2I
    //不能用来加密，只要用于防止篡改/
    //根据需要进行签名，否则浪费空间。
    req.secret = 'ds122dfsdfe321';
    //发送cookie
    res.cookie('name', 'shanShan', { signed: true});  //向前台发送cookie
    
    res.send('ok');
    console.log('1')
});