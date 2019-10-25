const express = require('express');
const expressStatic = require('express-static');

const app = express();
let serve = app.get('/', function(req, res){
    res.send({a:2,b:3});
    res.end();
});
app.use(expressStatic('www'));
serve.listen(80);