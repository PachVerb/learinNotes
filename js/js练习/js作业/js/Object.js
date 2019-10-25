//自身方法

/* Object.print = function(){
    console.log("我定义在Object上",this);
}
var b = Object.print;
b();//我。。。,this-->window */

//原型对象
//这里通过new实列出的对象，
//继承了原生对象Obect.prototype的方法
//obj对象的print方法实质上就是调用Object.prototype.print方法。
Object.prototype.print = function(){
    console.log("hello");
}
Object.prototype.name = "我是原型对象属性";
//var obj = new Function()
// var obj = new Object()

// var b = obj.print;

// b();//hello

// console.log(obj.name);

//Object();

//符合类型数据

/* var a =[1,2];
var b = {name:"123"};

var obj1 = Object(a);//原数组
var obj2= Object(b);//

console.log(a=== obj1,a instanceof Object);//true，返回数组
console.log(b === obj2) */
//传入对象参数返回元对象

//判断变量是否是对象
// var a = 2;
// if(a){
//     console.log("i is Object")
// }

/* function isObject(value)
{
    return value === Object(value);
}

console.log(isObject(2));//false
console.log(isObject([]));//true

console.log(isObject("he"));//false */

var obj = {
    name:"勒布朗",
    age:"35"
}
console.log(obj.valueOf());//{name:'',age''}