//箭头函数替换普通函数声明
//注意 不要替换某些函数特意为申明的函数,否则可读性很差.
//箭头函数替换于被替换函数长度负相关,也就是被替换函数越长,
//那么替换的意义就不大;函数月短,替换带来的好处就越大,在线函数表达式.

 
//箭头函数,this的固定.


//特列
// var controller = {
//     a:1,
//     makeRequest: () => {
//         this.helper();  //window ==> foo, this --> window
//     },
//     helper: () =>{ 

//     },
//     foo: function(){
//         console.log(this)   //this --> a
//     }
// }
// function helper(){
//     console.log(window)
// }
// let a = 'global';

// controller.makeRequest();
// controller.foo();

//实用箭头函数时机
/*
1.一些常见需要传入回调的api调用的

var arr = [1,3....];
arr.map( v => v* 2 );   // [2,6...]；

2.内层函数表达式，需要 通过显示绑定，或者 变量存储当前this，来固化this的，可使用回调.
function xxx(){
    variable = this ||
    xxx(() => { //回调继承 外层函数 this
        do this scope something
    })
}


避免使用箭头情况
需要使用具名函数的，函数神明，语句较多的函数表达式，需要词法标识符（递归)函数，避免使用箭头。


*/


