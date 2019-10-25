//链式操作
const express = require('express');
const bodyParser = require('body-parser');

const serve = express();
serve.listen(80);

serve.use('/', (req, res, next) => {
    console.log('a');
    next(); //调用next则进行下一步，进行链式操作
})

serve.use('/', (req, res, next) => {
    console.log('b')
})

