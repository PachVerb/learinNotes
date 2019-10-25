const http = require('http');
const express = require('express');

let serve = express();
serve.listen(80);

serve.use('/www/index.html', (req, res) => {
    //发送cookie
    res.cookie('name', 'shanShan', { path: '/www', maxAge: 30*24*3600*1000});  //向前台发送cookie
    
    res.send('ok');
})