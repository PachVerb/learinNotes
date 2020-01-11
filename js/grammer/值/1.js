// 值类型 数组
//数组 通过 [] 或许对应位置值时，可以是字母数字类型的字符字符串。字母类型不计算在数组长度内，但是如果为数字类型，可以强制转化为十进制的则计算为数组长度。
var arry = [ ];
arry['1'] = 2;      // length not change
arry['13'] = 42;    // length 14
arry['12'] = 12;    // length 19
arry['15'] = 15;    // length 19
arry['18'] = 35;    // length 19
console.log(arry, arry.length)  //arry.length == 14;
//数组存放数字键，对象存放字符键/键值

//类数组
//转化为真正数组
function foo(){
    //arguments.push(1)   TypeError: arguments.push is not a function
    var arr = Array.prototype.slice.call(arguments);    //1
    arr = Array.from(arguments);    //等价实现 2
    arr.push(4) //加入 4
    console.log(arr);
}

foo(1,2,3)