// let arr = [1,2,3],a,b,c;
//赋值
// [a,b,c] = arr;
// console.log(a,b,c)

//对象
let obj = {
    star:'许嵩',
    sing:'幻听'
};
// let x,y;
//注意括号，否则会被当做块语句
// ( {star:x,sing:y} = obj );
// console.log(x,y);

//[],{}并不一定是对象，也可以是赋值表达式
//arr
let o = {};
// [o.a,o.b] = arr;
//obj
// ({star:o.x,sing:o.y} = obj);
o; //{ a: 1, b: 2, x: '许嵩', y: '幻听' }


//结构赋值中，计算出的属性表达式
let which = 'x',
    obj_1 = {};
({star:obj_1[which]} = obj);
obj_1; //{ x: '许嵩' }

//对象映射为数组

let o1 = {a:1,b:2,c:3};
let a2 = [];
({a:a2[0],b:a2[1],c:a2[2]} = o1);
a2; //[ 1, 2, 3 ]

//数组映射为对象s
let o2 = {};
let a3 = [1,2,3];
[o2.a,o2.b,o2.c] = a3;
o2 //{ a: 1, b: 2, c: 3 }

//不用临时变量，交换两个变量的值
// let x = 10, y = 20;

// [x,y] = [y,x];
// console.log(x,y)    //20，10

//声明和赋值应该分开


//对象解构，应许多次列出同一原属性
// let { a:X, a:Y } = {a:1};
// X,Y;    //1,1


//结构子对象，数组
// let {a:{x:X,x:Y},a} = { a:{x:1} }
// console.log(X,Y,a);

// let Z;
// ({a:X,a:Y,a:[Z]} = {a:[1]})

// X.push(10,5);
// console.log(Z,X,Y);

//对于含有结构的数组/对象解构
//便于阅读，可以进行缩进。

//解构赋值表达式
// let o4 = { a:1, b:2, c:3 },
//     a, b, c, p;
//
// p = {a, b} = o4;
// console.log(p);


//解构赋值表达式组成链
let o5 = {a:1,b:2,c:3},
    p = [4,5,6],
    a,b,c,x,y,z;
( {a} = {b,c} = o5);
[x,y] = [z] = p;
console.log(a,x,y);
