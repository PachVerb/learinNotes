//操作数选择器 || &&
var a = 42;
var b = "abc";
var c = null;

//&& || 均会根据首个操作数，进行返回值。在进行返回时，先将操作数强制类型转换为布尔值 || 如果首个操作数是 true 则返回首个 原型值。否则返回第二个操作数。 && 则于 || 相反。

console.log(a || b);    //42
console.log(c && a) //null


//函数默认值
function foo(a, b){
    var a = a || 'hello';
    var b = b || 'world';

    console.log(a + " " + b);
}

foo();  //hello world 再c# 中，为 空值合并运算符。 这里用于函数默认值设置
foo('yeah', 'yeah')

//注意传入假值
foo("That's it!", "")   //That's it world

//上面的选择器运算符结合流程控制运算符，会发生两次隐式类型转换。
var a = 42;
var b = null;


if(b || a){
    console.log('ok')
}

//避免隐式类型转换
if(!!a || !!b){
    console.log('ok')
}