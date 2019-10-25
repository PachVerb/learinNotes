const express = require('express');
const expressStatic = require('express-static')
const bodyParser = require('body-parser');  //解析post数据

const server = express();
app.listen(80);
server.use('/', (req, res) => {
    console.log(req.query)  //get,解析get提交数据
})