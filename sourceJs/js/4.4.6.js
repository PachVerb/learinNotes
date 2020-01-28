//符号的强制类型转换
//string
var s1 = Symbol('cool');
console.log(typeof String(s1)); // Symbol(cool)
//转换为数字， 发生错误
// var num = Number(s1);
// console.log(num)    //connot convert a Symbol value to a number TypeError
//转换为布尔值, 允许转换为boolean 皆为true
var bool = Boolean(s1);
// console.log(bool) //true

//隐式转换为字符串, typeError
var s2 = s1 + "";
console.log(s2)