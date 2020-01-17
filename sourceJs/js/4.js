//强制类型转换

var a = 42;
var b = a + ''; //隐式强制类型转换
var c = String(a);  //显示强制类型转换
var tb = typeof b;
var tc = typeof(c);
console.table(tb, tc);

//简单标量类型，通用转换规则
var a = 46;
var obj = {
    name: 42
};

var str = a.toString();
console.log(typeof str);    //string
console.log(obj.name.toString()) //返回内部[[Class]] 

//数组的toString经过从新定义
var arr = [1, 2, 3];
console.log(arr.toString());    //1, 2, 3
