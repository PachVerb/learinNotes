//结构化值,解构成单个值,并赋值到单个变量中.
//array
// let arr = [1,3,4];
//
// let [a,b,c] = arr;
// console.log(a,b,c)  //1,3,4

//obj
let obj = {
    x:1,
    y:2,
    z:3
}
// let { x:x,y:y,z:z} = obj;
// x,y,z; //1,2,3

//简写,依照上面对象结构,属性简写 为 ,x:区域
// let {x,y,z} = obj;
// console.log(x,y,z)  //1,2,3

//对像结构讨论
let { x: bam, y: baz, z: bap } = obj;
console.log(bam,baz,bap)    //1,2,3
//console.log(x,y,z); //is not defined






