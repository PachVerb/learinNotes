const express = require('express');
const expressStatic = require('express-static') //安装读取静态文件的中间件 express-static,类似 fs模块，他是一个封装
const bodyParse = require('body-parser');   //用于post数据解析

//设计程序，用于用户登录，以及静态文件读取。
const users = {
    "zhoubo": "12345",
    "chenjinnan": "54321",
    "hanfeihong": "175623"
};
const app = express();
app.get('/login', function(req, res){
    console.log(req.query);
    let user = req.query.user;
    let pwd = req.query.pwd;
   if(users[user] == null){
        res.send({ok:false, msg:"此用户不存在"});
   }else if(users[pwd] !== pwd){
       res.send({ok: false, msg:'账号或者密码错误'});
   }else{
       res.send({ok:true, msg:'登录成功'});
   }
   res.end();
})
app.use(expressStatic('www'));
const server = app.listen(80);