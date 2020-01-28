//隐时强制类型转化
//这个概念是相对来说的,相对自己来说凡事不太明显的类型转化就是隐是的
//作用：减少冗余，代码简洁。
//字符串与数字隐式强制类型转化。

//实例
var a = [1, 2];
var b = [3, 4];

console.log(a + b); //"1, 23, 4"

//valueOf返回指定对象原始值
function Foo(a){
    this.name = a;    
}

Foo.prototype.valueOf = function(){
    return this.name;
}
var obj = new Foo("Tom");   //底层调用valueOf 将对象转化为原始值。
console.log(obj + 'hello world')

// + 实现数字与字符串隐式类型转化。
// + 通常用于加法操作，同时能用于类型转化。 至于作用那种，看操作数，如果运算符附近有字符串操作数，进行拼接操作；否则进行加法操作。
//对于对象或者数组，则同于toNumber抽象操作类似，将对象数组转化为基本类型，然后进行运算。

//a + " " 隐式和  String(a) 转化区别 , 这里 a 是非数字情况。

var a = {
    valueOf(){ return 42},
    toString(){ return 2}  
};

console.log(a + 32);    //number 74

//String进行内心转化时，直接调用对象toString
console.log(String(a))  //string 2

//字符串强制类型转化为数字
// - ， (/， * : 这两种方式仅仅适用于数字，不常见·)
var a = "3.14";
var b = a - 0;

b = a * 1;
b = a / 1

console.log(typeof(b))  //number