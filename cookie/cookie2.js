const express = require('express');
const cookieParser = require('cookie-parser');  //解析cookie

let serve = express();
serve.listen(80);

serve.use(cookieParser())

serve.use('/', (req, res) => {
    //读取cookie
   console.log(req.cookies);
});