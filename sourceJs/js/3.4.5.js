//原生原型
//所有字面量都对应内置内置对象类型一种。同时被JavaScript引擎所封装，以调用该内置对象API.
//这里以String为列。

var a = " hello worLd ";

//说明： String.prototype.propertyname 简写 String#propertyname

//字符串操作
//indexOf, String#indexOf
console.log(a.indexOf('w'));    //7

//chartAt
console.log(a.charAt(a.indexOf('w')));  //w

//substr, substring, slice
console.log(a.substr(1, 5))

//toUpperCase(), toLowerCase()
console.log(a.toUpperCase());
console.log(a.toLocaleLowerCase())

//trim  去掉 字串首尾空格。 经测试 hello world 字串 o - w之间的空格仍然存在。
console.log(a.trim())

//  说明：上述api均不会对原字符串做任何修改.


//原生原型
//Function
var f = typeof Function.prototype;
console.log(f);
//Array
var arr = Object.prototype.toString.apply(Array.prototype)  //Array
console.log(arr);

//RegExp
var expt = RegExp.prototype.toString();
// var matchresult = 'hello'.match(RegExp.prototype)
// console.log(expt, matchresult)
console.log(RegExp.prototype, Array.prototype, Function.prototype)


//原型作为默认值
function isThisCool(vals, fn, rx){
    vals = vals || Array.prototype;
    fn = fn || Function.prototype;
    rx = rx || RegExp.prototype;

    return rx.test.call(RegExp.prototype, vals.map(fn).join(""))
}

var res = isThisCool();
console.log(res);
