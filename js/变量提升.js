// var a = 2;
// (function foo(){
//     var a = 2;
//     console.log(a);
// })()

// console.log(a);

//变量提升
// a = 2;

// console.log(a);
// var a;

// bar();在此地调用bar会报错
// var bar = function(){
//     console.log("hello");
// }
// bar();//hello
//上面的匿名等同下面过程
// var bar;
// bar();
// var bar = function(){
//     console.log("hello");
// }

//具名函数

// foo();
// function foo(){
//     console.log("hello");
// }

//变量函数声明位置会被提升到作用域顶端，而赋值操作则会停在原地                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

//具名函数调用怎么理解成赋值？

//var foo被忽略，但是同名函数，后面的会
//覆盖前面的
// foo();
// function foo(){
//     console.log(1);
// }
// function foo(){
//     console.log(3);
// }
// var foo = function(){
//     console.log(3);
// }
//普通块内声明的函数也会覆盖前面同名函数
//避免块级内部绑定函数
foo();

var a = true;

if(a){
    function foo(){ console.log("a"); }
}else{
    function foo(){console.log("b"); }
}
//函数变量申明过程，分两个过程。一个是声明过程，第二个是赋值过程。
//无论作用域在什么地方，代码执行前都会被首先声明处理
//这个过程看成是所有函数和变量的声明都会被移动到各自作用域顶端
//这个过程称为 提升
//注意：尽量避免函数和变量同名。会很容易覆盖。出现问题。