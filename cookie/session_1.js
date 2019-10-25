const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

let serve = express();
serve.listen(80);


serve.use(cookieParser( ));
//在cookie解析之后
serve.use(cookieSession({
    keys: ['sdff12','werdd4wer','343sdfsdfsdf']
} ));

serve.use('/', (req, res) => {
    // 记录客户访问页面次数
    //session也可以保存用户登录状态
    if(req.session['count'] == null){
        req.session['count'] = 1;
    }else{
        req.session['count']++;
    }
    console.log(req.session['count'],req.session);  //1..  { count:1.. }
    res.send('ok');
});