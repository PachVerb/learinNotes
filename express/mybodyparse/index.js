const queryString = require('querystring');

module.exports = function(req, res, next){
    let str;
    req.on('data', (data) => {
        str += data;
    })
    req.on('end', () => {
        res.body = queryString(str);
        next();
    })
}
