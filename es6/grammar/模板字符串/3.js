//插入表达式作用域
function foo(str){
    let name = "foo";
    console.log(str);
}

function bar(){
    let name = 'bar';
    foo(`Hello from ${name}`);  //`` 产生的作用域在当前此法作用域.
}

let name = "global";

console.log(bar());