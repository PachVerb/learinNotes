//数字 and 字符串之间显示强制类型转换
var a = 32;
var b = "3.14";

console.log(typeof(Number(b)), typeof(String(a)));  // "32" number 3.14

//其他方法，实现数字和字符串转换
console.log(typeof(a.toString()), typeof(+ b));  // "32" 此方式为包含隐式类型转换。js引擎在编译执行代码式，会封装常量。然后转换类型。

//- 
console.log( -b);   // number -3.14, 减号反转为数字符号位
//solution
console.log(- -b)  //  number 3.14
console.log(5+ +b)  //8.14
console.log(1 + - + + + - + 1)  //2

// 日期显示转换为数字。

var date = new Date();
var s = +date;

//获取当前系统下的时间戳。 可以指定时间返回。
s = +new Date();

//
s = +new Date("2018-1-12");

// 对于构造函数无参数时候，可以 省略（）
s = +new Date
console.log(s); // 15795...  ok

//使用时间对象api显示获取时间戳。不建议类型转换。

var timeStap = new Date().getTime()
console.log(timeStap)   //15795... ok

//new Date().now()  polyfill
//用于老版浏览器
if(Date.now){
    Date.now = function(){
        return +new Date();
    }
}


//~ 运算符
var  a = (Math.pow(2, 53) - 1);   //js最大整数
var b = Math.pow(2, 10) | 0

a = ~2;
b = ~0
console.log(a);

