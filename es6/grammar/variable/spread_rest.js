function foo(x,y,z){
    console.log(x,y,z);
}
foo(...[1,2,3]);    //spread


//...扩展数值
let a = [1,2,4];
let b = [3,5,6,...a,6]; //[ 3, 5, 6, 1, 2, 4, 6 ]
//concat(valueN)
//valueN = string/num/array...，则表示向数组插入值.return array
//无valueN 元素组浅拷贝
a.concat(5)    //[1,2,4,5]
a.concat(b);    //[1,2,4,3,5,6,1,2,4,6]
a.concat();

//...收集
function fun(x,y,...z){
    return x,y,z
}
let value = fun(2,3,4,5,6); //收集多余参数
//z [4,5,6]

function func(...args){
    return args
}
let args = func(1,2,3,4,5);
console.log(args);  //args[1,2,3,4,5];

//args通常称为rest，是一个数组







