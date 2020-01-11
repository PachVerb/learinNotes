/*  var obj = {
    id:"ok",
    cool:function coolFn(){
        //var self = this;//这里本地化this
        console.log( this.id );
    }
};

var id = "not ok";

obj.cool();//ok 

setTimeout( obj.cool.bind(obj), 100);//undefined */

/* 
var obj = {
    count:0,
    cool:function cooFn(){
        var self = this;

        if(self.count < 1){
            setTimeout(function timer(){
                self.count++;
                console.log("ok");
            })
        }
    }
};
var count = 0;
obj.cool(); */


   /*  this问题解决办法：var a = this;
    箭头函数
    bind(对象名)方法

*/

/* function foo(){
    console.log("123");
    console.log(this);
}

function bar(){
    console.log("456");
}
 //中的函数其实是对象，函数名是对 Function 对象的引用
foo.call(bar);//foo作为bar对象方法 */

// if(isNaN(undefined)){
//     console.log("ok");
// }else{
//     console.log("error");
// }

//解决问题，但没用到this
/* function foo(num){
    console.log("foo:"+ num);
    data.count++;
}

var data = {count:0}

var i;

for(i = 0; i<10;i++){
    if(i>5) {foo(i)}
}
console.log(data.count) 
 */
//函数引用自生

/* 
    函数内部this指向window，通过标识符指向自生。

*/
// function foo(){
//     foo.count = 4;
//     console.log(foo.count)
//  }

/*对于匿名函数引用自生，
需要用arguement对象的calle属性,返回正被执行的 Function 对象，
这是每个函数都有的一个对象实列。*/
// var foo = function(n){
//     if(n == 1){
//         return 1;
//     }else{
//         return n + arguments.callee(n-1);
//     }
// }
//  foo(2); 
/* 
function baz(){
    //console.log("hello");
    bar();
}

function bar(){
    //console.log("bar");
    console.log(this);
    foo();
}

function foo(){
    //console.log("foo");
    console.log(this);
}

baz(); */

//严格模式下，this不会默认绑定到全局对象window。
//会绑定到undefined
/* function foo(){
     "use strict";//严格模式下
    console.log( this.a );
}
var a = "hello";

foo();//a = undefined */

/*
细节点，函数运行在非严格模式下仍然指向
全局对象。函数调用位置不影响默认绑定

*/
/* function foo(){
    //函数的执行位置
    "use strict"
    console.log(this.a);
}

(function(){
    "use strict";
    foo();
})() */
 
//隐式绑定函数会丢失，绑定
/* 

    这里的bar是对foo函数本身的引用，且不带任何修饰，故会默认绑定

*/
/* function foo(){
    console.log(this.a);
}

var obj = {
    a:"hello",
    foo:foo
}

//obj.foo();//hello;

var a = "我属于全局"

var bar = obj.foo;

bar(); */
/* 

    当函数有引用上下文，被当作参数隐式传入函数
    时，此时的this绑定到thish.

*/

//call ,apply
/* function foo(a){
    console.log(a+3);
}

foo.apply(this,[2]); */
/* 
function foo(){
    console.log(this.a);
}

var obj = {
    a:2
}

var b = foo.bind(obj);

console.log(b); */

//b();

/* 

        es5内置函數方法function.prototype.bind
        原型。顯示綁定，調用内置方法call,apply;
        對於應綁定this丟失情況，使用應綁定。即是創建包裹函數

*/
/* function foo(sunthin){
    console.log(this.a + sunthin);
    return this.a + sunthin;
}
var obj = {
    a:2
}
function bind(fn,obj){
    return function(){
        return fn.apply(obj,arguments);
    }
}

var bar = bind(foo,obj);

var b = bar(3);

console.log(b); */
