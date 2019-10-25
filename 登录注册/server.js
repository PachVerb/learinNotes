const http = require('http');
const fs = require('fs');
const urlLib = require('url');
const query = require('querystring');

let users = {}; //存储用户库，模拟数据库
http.createServer((req, res) => {
    //post数据，解析数据
    let str = '';
    req.on('data', function(data){
        str += data;
    });

    req.on('end', function(){
        var urlObject = urlLib.parse(req.url, true);
        let url = urlObject.pathname;
        let GET = urlObject.query;
        console.log(GET);
        let _strPost = query.parse(str);

        let file_name = './www' + url;
        //区分文件读取，和接口请求
        if(url == '/user'){     //接口请求
           switch(GET.act){
                case 'reg': //注册
                    //1.检查用户是否存在
                    if(users[GET.user]){
                        res.write('{"ok":"false","msg":"此用户已存在"}');
                    }else{
                        users[GET.user] = GET.pass;
                        res.write('{"ok":"true","msg":"注册成功"}');
                    }
                    //2.没有，插入用户注册
                   break;
                case 'login':   //登录
                    //检测用户是否已经存在
                    if(users[GET.user] == null){
                        res.write('{"ok": false,"msg":"用户不存在"}');
                    }else if(users[GET.user] != GET.pass){
                        res.write('{"ok": false,"msg":"用户名或密码有误"}');
                    }else{
                        res.write('{"ok": true,"msg":"登录成功"}');
                    }
                    //验证密码是否正确
                   break;
                default:
                   res.write('{"ok":false,"msg":"未知得act"}');
           };
           res.end();
        }else{  //文件读取
            fs.readFile(file_name, function(err,data){
                if(err){
                    res.write('404');
                }else{
                    res.write(data);
                }
                res.end();
            });
        }
       
    });
    console.log(users);
}).listen(80);