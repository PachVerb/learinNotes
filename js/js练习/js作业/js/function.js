/* var fnc = function x(){
    console.log(typeof x);
    x();
}

fnc();
 */
//命名函数表达式
/* var f = (function(){
    var f, g;
    if (true) {
      f = function g(){};
    }
    else {
      f = function g(){};
    }
    // 设置g为null以后它就不会再占内存了
    g = null;//g在函数返回时一直占用内存
    return f;
  })(); */
  //构造函数

//   //var foo = Function(n1,n2,{//函数体，可以理解为实现的功能的语句});
//   var foo = new Function('n1','n2','return n1 + n2');
// //可以不用new
//   console.log(foo(1,2));

//函数属性---name;

// var foo = function(){
// }
// console.log(foo.name);//foo

// var foo = function boz(){
// }
// console.log(foo.name);//boz,正真的函数名--》foo,boz旨在函数内部有效

// function test(){
// }
// console.log(test.name);

/* var foo = function boz(){
}

function text(fn){
    console.log(fn.name);
}
text(foo)//boz,正真的函数时foo */

//函数重载
//length属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的“方法重载”（overload）。

// var a = "我是全局的人";
// function foo(){
//     console.log(a);
// }

// function boo(){
//     var a = "我是boo的人";
//     foo();
// }

// boo();

//函数传值方式，值传递和地址传递
/* var p = 2;

function f(p) {
  p = 3;
}
f();

console.log(p) // 2 */


//值传递：参数类型是原始数据类型（数字，字符串，布尔值）
//地址传递：复合类型，（数组，对象，函数）
/* var obj = {a:1};
function f(o){
  o.a = "被我该了吧";
}

f(obj);

console.log(obj.a);//o.a
 */
//函数地址传递
// function f(){
//   var a = 1;

  
// }

//闭包

// function createIncrementor(start) {
//   return function () {
//     return start++;
//   };
// }

// var inc = createIncrementor(5);

// inc() // 5
// inc() // 6
// inc() // 7

//两行之间添加分号
// (function(){ /* code */ }());
// (function(){ /* code */ }())


//如果使用严格模式，eval内部声明的变量，不会影响到外部作用域。

//eval最常见的场合是解析 JSON 数据的字符串，
//不过正确的做法应该是使用原生的JSON.parse方法。

//相等运算符会自动转换变量类型，造成很多意想不到的情况。
// console.time("for");
// for(var i = 0; i < 5; i++){
//   console.log(i);
//   if (i === 2) debugger;
// }
// console.timeEnd("for")

console.trace()
for(var i = 0; i < 5; i++){
     console.log(i);
     if (i === 2) ;
}