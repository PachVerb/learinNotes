var x = 1;

function *foo(){
    x++;
    yield;  //暂停
    console.log(`x: ${x}`);
    return 1
}
function bar(){
    x++;
}

//构造迭代器控制foo
var it = foo();
var a = it.next();  //开启生成器
console.log(x,a)
/*
    x --> 2
*/
bar();
console.log(x)
/*
    x --> 3
*/
it.next();  //暂停处继续执行
/*
    x --> x: 3
*/
