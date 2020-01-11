//数字类型
//数字指数标识
// toExponential()

let a = 5E+10;
    a // 50000.。。。   //还不是特别大，展开打印了结果
    let la = a.toExponential(); // string--> '5e10' //指数打印了结果

let b = a * a;  //number 2.5e+21

//toFixed() 指定任意数小数位数。
a = 13.2;
a.toFixed(0);   //13--> string
a.toFixed(1);   //13.2-->..
a.toFixed(2);   //13.20
a.toFixed(3);   //13.200

//toPrecision 指定有效数字位数
a = 42.59;
b = a.toPrecision(1);   //4e+1
a.toPrecision(2);       // 43
a.toPrecision(3);       // 42.6
a.toPrecision(4);       //42.59


//.运算符有特殊情况，在调用某些api时，会被优先当作字符常量一部分。
// 20.toFixed(1)   //Error
a = (20).toFixed(1);    //20.0
b = 20.0.toFixed(2)     //20.00
var c = 20..toFixed(3);     //20.000

//浮点数
//js 二进制浮点数(0.1 + 0.2)不精确性
a = 0.1 + 0.2;  // 0.30000000000004

//js处理数字运算，特别是小数时，设置误差解决误差问题。js数字误差范围 2^-52
//判断两数相等
if(!Number.EPSILON){
    Number.EPSILON = Math.pow(2, -52)
}
function numbersCloseEnoughToEqual(n1, n2){
    //两数差绝对值
    return Math.abs(n1 - n2) < Number.EPSILON
}

b = 0.3;
a = numbersCloseEnoughToEqual(a, b);    //true
a = numbersCloseEnoughToEqual(0.0000001, 0.0000002) //false 超过精度范围
a = 0.0000001 - 0.0000002
//
//整数检测
//integer
a = Number.isInteger(0.002)
console.log(a);