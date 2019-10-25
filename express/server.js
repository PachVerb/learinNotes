const express = require('express')
const app = express()
 
//开启服务
app.get('/', function (req, res) {
    res.send('Hello World')
    res.write()   //支持buffer对象，和string.不支持返回 object.
    res.send({a:1,b:2}); 
})
 
app.listen(8080);
 
//express 保留了原生的功能，添加了一些方法（send）,增强原有功能。非侵入式。

//扩展三种方法
//.get(url, func);
//.post(url,func);
//.use(url,handler);
