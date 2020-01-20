//强制类型转换

var a = 42;
var b = a + ''; //隐式强制类型转换
var c = String(a);  //显示强制类型转换
var tb = typeof b;
var tc = typeof(c);
console.table(tb, tc);

//简单标量 类型，通用转换规则
//toString
var a = 46;
var obj = {
    name: 42,
};
//普通对象的序列化
var str = a.toString();
console.log(typeof str);    //string
console.log(obj.name.toString()) //返回内部[[Class]]
//使用JSON.stringify序列化普通对象为字符串。 toString（）回返回对象内部构造类型。不哪序列化为字符串。除非自定义
console.log(JSON.stringify(obj))  //"{"name": 42}"
//不安全json值 --》 循环引用（对象之间的相互引用）
var obj2 = {
    a:obj
}
console.log(JSON.stringify(obj2), 1111)

//数组的toString经过从新定义
var arr = [1, 2, 3, undefined, function foo(){}, Symbol('hello')];
// console.log(arr.toString());    //1, 2, 3
console.log(JSON.stringify(arr))    //"[1, 2, 3, null, null, null]" 对于数组中，不安全的值，json.stringify在序列化式，直接null.

//不安全的json值
//undefined, function, symbol
var a = Symbol('hello');
obj['symbol'] = a;
obj['fnc'] = function(){};
obj['undefin'] = undefined;

//json.stringify直接序列化值
JSON.stringify(undefined);  //undefined
JSON.stringify(function foo(){});   //undefined
JSON.stringify(Symbol('hello'));    //undefined

//循环引用实列，对象同时包含非法值
var o = {};

var a = {
    b: 42,
    c: o,
    d: function(){}
}

o.e = a;
//toJSON定义此方法, JSON序列化时，首先调用此api，然后在序列化此api返回值。
a.toJSON = function(){
    return {b: this.b}
}
 console.log(JSON.stringify(a));
 
