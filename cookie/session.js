const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

let serve = express();
serve.listen(80);


serve.use(cookieParser( ));
//在cookie解析之后
serve.use(cookieSession({
    name:'sess',
    keys: ['sdff12','werdd4wer','343sdfsdfsdf']
} ));

serve.use('/', (req, res) => {
    //session 
    console.log(req.session);   //{}    //session属于服务器接受的东西，需要req.session在req上。
    res.send('ok');
});