//相等比较操作性能
// 理应来说，两种运算符的性能差别不大，如果存在。仅仅是白外分之一秒的差别。严等比较时，需要进行类型判断。抽象比较时，需要进行类型强制类型转换。
//字符串和数字之间相等比较
//x,y 为字符串和数字两种不同比较情况
//规则:两者之中，谁为字符串则转换谁
/*
    x=> number
    y=> string
    x==y, y ==> toNumber(y)

    x=> string
    y=> number
    x==y, x ==> toNumber(x)

*/

//其他类型与布尔类型的比较
var a = '42';
var b = false;
var c = true;

console.log(a == b);    //false

/*
    If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
    If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
*/
a = 0;
console.log(a == b) //true
a = 1;
console.log(a == c) //true

//任何情况下。不要直接使用布尔值与其他类型比较，== 会强制类型转换。 === 不会。 


// null , undefined
var a = null;
var b;
console.log(a == null); //true
console.log(b == null); //false
console.log(a == b);    //false
console.log('===')
console.log(a == "");
console.log(a == 0);
console.log(a == false)

//对象和非对象之间的相等比较
// x 或者之一为对象，则toPrimitive(x || y) 进行转换。对于非对象则不做转换。
//== 有拆封一过程
//列
a = 42;
b = [42];
console.log(a == b) //true
console.log(b.toString())    //42

// 对于 null, undefined. 由于不存在对应封装对象。所以，没有解封一说。在与自身经过牵强封装过的对象比较时，结果为假值。NaN 存在封装对象，但拆封结果为 NaN 既不等于自身，也不等于其他。
a = null;
b = Object(a);
console.log(a == b);    //false
a = undefined;
b = Object(a);
console.log(a == b);    //false
a = NaN;
b = Object(a);
console.log(a == b);    //false

//其他特殊情况
//内置原生内型
Number.prototype.valueOf = function(){
    return 3;
}
console.log(new Number(2) == 3); //true
// 这里结果会相等是因为发生强制toPromitive ,拆封 调用了 valueOf 返回 3 ， == 3
var i = 2
a = 42;
Number.prototype.valueOf = function(){
    return i++;
}
var b = new Number(a);
if(b == 2 && b == 3){
    console.log('yep, this happened')
}else{
    console.log('i is changed')
}

//假值相等比较
//各种情况如下

"0" == null;
"0" == undefined;
"0" == false;
"0" == NaN;
"0" == 0;
"0" == "";

false == null;
false == undefined;
false == NaN;
false == 0;
false == "";
false == [];
false == {};

"" == null;
"" == undefined;
"" == NaN;
"" == 0;
"" == [];
"" == {};

0 == null;
0 == undefined;
0 == NaN;
0 == [];
0 == {};

//其他情况
[] == ![];  //true
2 == [2]; //true
"" == [null];   //true
//这里在比较时，数组都进行了抽象操作，数组转化为字符串化， [2] ===>  "2", [null] ==> "". 
// special
console.log(0 == '\n'); //true
// "", " ", "\n" 组合强制类型转换为 0


//安装使用隐式强制类型转换原则
/*
    1. 两边都有true ， false。 不用==
    2. 运算符两边有 "", 0 , [], 不用 ==；
    typeof 下的强制类型转换是安全的。不存在隐式强制类型转换。
*/


