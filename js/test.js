// console.log("12");
// function node(){
//     console.log("123")
// }
// node();
// setInterval(function(){
//     console.log("1")
// },500);

// 作用域嵌套：查找变量的一套机制

// function foo(a){
//     console.log(a + b);
// }
// var b = 2;
// foo(2);

// 为申明的变量抛出异常

//ReferenceError重要异常类型
// var b = 1;
// a+b;

//RHS查询失败，TypeError
// var a = 2;LHS查询

//  console.log(a());

//总结一种异常类型，同作用域判断失败相关；
//另外一种，则是对作用域判断成

//全局变量--遮蔽引用
// a = 4;
// var a = 2;

// console.log(a);
// console.log(window.a);

//欺骗词法作用域，缺点：导致性能下降。
// function foo(str,a){
//     eval(str);//执行代码是引擎会忽略此次代码，定义变量位置。
//     console.log(a,b);
// }
// var b = 2;
// foo("var b = 3", 1)//1,3

//外部作用域无法访问内部作用域标识符。

// function foo(){
//     var b = 2;

//     function bar(){
//         var c = 2;
//         console.log(c);
//     }
//     return c;
// }

//bar();报错

//作用域变量访问--同名访问
// function foo(){
//     var b = 2;

//     function bar(){
//         var b = 4;
//         console.log(b);
//     }
//     return bar();
// }

// foo();

//对此在整个作用域都可以访问的变量应小心处理，避免污染
//隐藏内部实现

// function doSomething(a){
//     b = a + doSomethingElse(a * 2);//前一步写成doSomething导致递归

//     console.log(b * 3);
// }

// function doSomethingElse(a){
//     return a - 1;
// }//第一次
// function doSomethingElse(a){
//     return a - 2;
// }

// var b;
// var b = 4;

//doSomething(2); //15 第一次
//doSomething(2) //12 第二次，出现相同标识符造成污染

//第二种写法     

// function doSomething(a){
//     function doSomethingElse(a){
//         return a - 1;
//     }
//     b = a + doSomethingElse(a * 2);//前一步写成doSomething导致递归

//     console.log(b * 3);
// }
// doSomething(2);//15

//冲突规避

// function foo(){
//     function bar(a){
//       i = 3;//全局变量处理
//         console.log(i + a);
//     }

//     for( var i = 0;  i<5; i++){
//            bar(2 * i);      

//     }
// }
// foo();

//执行顺序：
// 定义函数，但是没执行--》执行循环 i被定义且赋值=》执行bar函数
 
//i在当前bar函数作用域找不到 找到上级作用域的i然后
//被赋值为3 =》打印 继续循环i被增加1 为4又赋值为3

// function foo(){
//     i = 1
// }
//  foo();//11

//  console.log(i)

//函数表达式：有匿名，同样也有命名的
//有名函数通过（function(){}）()操作

//arguement
// function count(a){
//     if(a==1){
//         return 1;
//     } 
//     return a + arguments.callee(--a);
// }

// var mm = count(10);
// console.log(mm);//55
//--a 改为a报错

//立即执行表达式，外部括号传入参数。调用外部变量
//window==undefined;`g
// var a = 2;

// (function IIFE(global){

//     var a = 3;
//     console.log(a); //3;
//     console.log(global.a)//2;
// })(window);

// console.log(a);//

//倒置代码顺序·· 

//提升
// {
//var 的变量为什么不会出现提升。
//     console.log(a);
//     var a = 2;// 
//     //按理来说var会被绑定在外部作用域
// }变量提升，值提升声明，不会提升赋值操作

//函数出现提升
// a();
// function a(){
//     console.log("123");
// }

//块级作用域

// for(var i = 0; i<10; i++){
//     // console.log(i);
// }
// console.log(i);
let a = 2;
a = 3;
console.log(a);
