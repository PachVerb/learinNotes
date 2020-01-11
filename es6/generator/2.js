//交替执行
var a = 1;
var b = 2;

function *foo(){
    a++;
    yield;
    b = b * a;
    a = (yield b) + 3
    // console.log(a, b)
}

function *bar(){
    b--;
    yield;
    a = (yield 8) + b;
    b = a * (yield 2);
    // console.log(a, b)
}
// foo();  // a  7 b 4 
// bar();  // a 11 b 22


//上面程序重构
function step(gen){
    var it = gen();
    var last;

    return function(){
        //传回 yield 的值
        last = it.next(last).value
    }
}

//使用
var s1 = step(foo);
var s2 = step(bar);


s2();
s2();
s2();
s2(); 
s1();
s1();
s1();

console.log(a, b);

