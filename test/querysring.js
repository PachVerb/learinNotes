const querystring = require('querystring'); //查询字符换模块，解析url数据部分
const urlLib = require('url');  //url模块解析整个url

let stringJson = querystring.parse('foo=bar&abc=xyz');
console.log(stringJson);

//新版本，解析url字符串
let urlObject = new URL('http://nodejs.cn/api/url.html?user= 123&pwd=123');
console.log(urlObject.searchParams);

//旧版本
let _urlobject = urlLib.parse('http://nodejs.cn/api/url.html?user=shanshan&pwd=123',true);  //加入参数true,解析传参部分
console.log(_urlobject);

