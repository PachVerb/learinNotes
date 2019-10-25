const mybodyParse = require('./mybodyparse/index');
const express = require("express");

let serve = express();
serve.listen(80)

serve.use(mybodyParse);
serve.use('/', (req, res) => {
    console.log(res.body)
})

