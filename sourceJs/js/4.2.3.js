//ToBoolean抽象操作
//js值分为两类
//强制转换为 false
//强制转化为true
//强制转化出现的假值
//undefined
//null
// false
//+0 , -0 , NaN
//""

//假值对象
var str = new String("");
var tr = new Boolean(false);
var num = new Number(0);

var tb = new Boolean(str && tr && num)
var b = str && tr && num;
console.log(tb, b)
console.log(Number(b))

//封装假值对象，强制转换为 Boolean
var t = Boolean(str);
console.log(t)

//document.all类数组对象，强制转换类型为假值。通常用于判断浏览器是否是老版IE 
if(document.all){
    alert("support")
}

