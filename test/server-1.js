const http = require('http');


//post数据发送
let count = 0;
let server = http.createServer(function(req, res){
    let str = '';   //数据接受
    
    //post数据分段发送，每次发送需要注册事件异步监听
    req.on('data', function(date){  //data事件，每次post过来都会触发
        str += date;
        console.log('第'+ count++ + '次发送数据');
    })
    req.on('end', () => {   //end事件，数据发送完触发
        console.log(str);
    });
}).listen(80)