/*
	原型对象：prototype
	原型链：_proto_
*/
let myObject = {
	a:2
}

//普通函数，构造函数Function
function foo(){
	console.log('我的构造');
}

console.dir(foo)
/*
	查询到Function,和构造函数实列化对象一样，普通函数是通过Function创建，
	因为函数也是对象，所以所有函数的constructor==>Function。此过程，同时会在内存中创建原型对象，通过属性prototype属性访问。

	字面量对象的创建过程跟函数的过程相似，当你声明一个对象字面量时，js引擎就会构造函数 Object 来创建这个对象，所以 效果等同 new Object()
*/


//create方法封装
function create(proto,options){
	let obj ={};

	obj._proto_ = proto;

	if(options == null){
		return obj
	};

	return Object.defineProperties(obj,options)
}
//Object.create(obj,props)此处的props是对象，里面是属性描述符，及添加到对象的属性。
let newObject = create(myObject,{
	b:{
		value:1,
		writable:true
	},
	a:{
		value:2,
		writable:true
	}
})

create(myObject)
console.log(newObject.a)//2
console.log(newObject.b)//1
console.log(newObject._proto_ === myObject)//true
/*
	上面方法的兼容性写法,_proto_为非标准属性，仅有部分主流浏览器兼容
	new作用：
	1.创建一个新的对象（即实例对象）
	2.把新对象的__proto__ 指向 new 后面构造函数 的原型对象。
	3.把构造函数中的 this 指向 实例对象。
	4.做一些处理，然后返回该实例对象。
*/
function create(proto){
	function f(){}

	f.prototype = proto

	return new f()
}
//new封装
function New(func){
	let obj = {};

	if(func.prototype != null){
        obj._proto_= func.prototype;
    }
  
    func.apply(obj,Array.prototype.slice.call(arguments, 1));
    //把func构造函数里的this 指向obj对象，把传进来的第二个参数开始，放入func构造函数里执行，比如：属性赋值。

    return obj;
}

let my_object = create(myObject)

console.log(my_object.a,1)//2

console.log(my_object._proto_ === myObject)//false
console.log(my_object,1)