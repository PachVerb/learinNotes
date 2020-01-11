//解构赋值默认值
// let x = 200, y = 300, z = 100;
// let o1 = {
//     x: { y: 42 },
//     z : { y: z }
// };  //未加分号，Invalid destructuring assignment target 无效的析构分配目标
//
// //前面对象 x,y,z已有默认值，故使用默认值，不在对解构赋值
// ( { y: x = { y: y } } = o1 );
// ( { z: y = { y: z } } = o1 );
// ( { x: z = { y: x } } = o1 );
// console.log(x.y, y.y, z.y)
//嵌套解构
function foo(){
    return {
        x: 1,
        y: 2,
        z: 3
    }
}

let { x: y = 3, y: x = 2, z: a = 4, w: W = 30 } = foo()
console.log(x,y,a)