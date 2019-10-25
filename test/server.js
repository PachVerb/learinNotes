/*
    数据请求
    前台--》 form,ajax,jsonp

    服务请求均走http服务。

    请求方式：
    get,
    post


*/

//get方式
const http = require('http');
const urlLib = require('url'); 

http.createServer(function(req, res){
    //传统方式数据解析
    // let get = {};
    // let url = null;

    // if(req.url.indexOf('?') !== -1){    //get请求，
    //     let arr = req.url.split('?');   //['pathname','user = ....&pwd=....']
    //     let arr1 = arr[1];  //取get传数据
    //     let _infoString = arr1.split('&');
    //     url = arr[0];
    //     for(let i = 0; i < _infoString.length; i++){
    //         let arr2 = _infoString[i].split('=');
    //         get[arr2[0]] = arr2[1];
    //     }
    // }else{  //非get请求
    //     url = req.url;  
    // }
   

    // // console.log(url,get)
    // console.log(url, get);
    // res.write('success');
    // res.end();

    //URL模块
    let _urlObjec = urlLib.parse(req.url, true);
    let url = _urlObjec.query;
    console.log(url);

    //新方法
    

}).listen(8080);