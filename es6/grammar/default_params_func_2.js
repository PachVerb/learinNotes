//前面在处理两数和函数封装时,实现得都不是很好.尤其是在不能明确省略任意一个参数

//ES6
function add(x = 11, y = 31){
    console.log(x + y)
}
let a1 = add();
let a2 = add(5);
let a3 = add(5,null);
let a4 = add(null,5);

let a5 = add(0, 42);
let a6 = add(undefined,0);  //省略undefined

console.log(a1,a2,a3,a4,a5,a6)

