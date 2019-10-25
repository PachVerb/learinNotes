const express = require('express');

let serve = express();
serve.listen(80);

serve.use('/', (res, req) => {
    // res.cookies('name','shanshan');
    res.send('ok');
})