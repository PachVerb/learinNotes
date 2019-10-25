//const 用于创建常量，不可改变行，是对于变量赋值来说，对于值本身是可以改变得

const arr = [1,2,3];
//change arr
//arr = 2;    //const arr is readonly
//change value
arr.push(4);    //
console.log(arr);   //[1,2,3,4]