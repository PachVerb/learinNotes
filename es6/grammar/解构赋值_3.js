function foo(){
    return [
        1,
        2,
        3
    ]
}
function bar(){
    return {
        x:1,
        y:2,
        z:3
    }
}

//解构复制，对于模式的过少，则会去掉数组/对象展开的多余值。
let [,b] = foo();
let {x,z} = bar();
// console.log(x,z,b); //x,z,b数据/对象之外的值被抛弃。

//...结合解构

let arr = [1,3,4];
let [a, ...c] = arr;
//a 1,
//c [3, 4]
