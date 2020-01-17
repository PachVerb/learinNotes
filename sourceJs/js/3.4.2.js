//Object, Function, RegExp

var a = 'hello';
var e = new Function('a', 'console.log(a*2)');
var funcf = function(a){
    return a * 2;
}
function g(a){
    return a * 2;
}
e(2);
var h = new RegExp('^h', 'g');
var i = /^h/g;
console.log(a.match(h), a.match(i))

//如上通过原生代码实现的程序，通过内置函数达成相同效果。但是应该尽量避免
//通场这些内置函数用于动态创建程序。

