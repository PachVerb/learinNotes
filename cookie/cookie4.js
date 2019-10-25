const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');

let serve = express();
serve.listen(80);

serve.use(cookieParser('ds122dfsdfe321'));
serve.use('/', (req, res) => {
    //签名密钥,s%3AshanShan.vmkMEDfPYNwIgNSTKILK0N0O5xNQjYgWfFZ9q4OhN2I
    //不能用来加密，只要用于防止篡改/
    //根据需要进行签名，否则浪费空间。
    //签名解析
    req.secret = 'ds122dfsdfe321';
    //发送cookie
    res.cookie('name', 'shanShan', { signed: true});  //向前台发送cookie

    console.log(req.cookies)    //未签名的
    console.log(req.signedCookies); //签名的
    res.send('ok');
});