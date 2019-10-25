//引入刚刚定义得模块custom_moudle.js
const _moudle = require('custom_moudle');  //引入自己得模块，不许在模块前加 ./

console.log(_moudle.a,_moudle.d,_moudle.c); 
console.log(_moudle);