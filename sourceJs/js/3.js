//基本类型封装
var a = new Boolean(false);

if(!a){
    console.log('OOPs');    //无法执行到这里， 对象为真值
}

var a = 'abc';
var b = new String(a);
var c = Object(a);

typeof a;
typeof b;
typeof c;

b instanceof String;
c instanceof String;

Object.prototype.toString.call(b)
Object.prototype.toString.call(c)

//拆封获值
b.valueOf();
c.valueOf();

//隐式拆封
var strb = '' +  b;
console.log(strb);
strb = '' + c;  //无转换
console.log(c);

