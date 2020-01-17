//内置函数，也叫原生函数
var a = new String('hello');    //包含基本类型值的封装对象
var arr = [1, 2, 3];

if(typeof a == 'object'){   //typeof 区分变量a 所属基本类型一种（number, arr, string, null, object, undefined)
    console.log('ok');
}
a instanceof String;

console.log(a, arr)

Object.prototype.toString.call(a);
Object.prototype.toString.call(arr);


