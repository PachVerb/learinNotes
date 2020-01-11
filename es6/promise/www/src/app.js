// require配置
require.config({
    "baseUrl": 'src/lib',   //默认模块加载地址
    "paths": {
        "app": "../app"  //定义模块名ID
    }
})
// requirejs(['../app/main'], ($) => {
//     console.log($, this)
// });
// define(['jquery'], ($) => {
//     console.log($)
// })
//加载入口主程序