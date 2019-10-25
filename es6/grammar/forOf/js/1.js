// for...of 循环值是 interable(可迭代的)

//看看 for..in , for..of,数组
let arr = ['a','b','c'];
// console.log(Object.keys(arr))   //get index of array，return new array includes index of old-array

// for(let idx in arr){
//     console.log(idx);   // 0, 1, 2数组索引
// }

// for(let val of arr){
//     console.log(val);   //数组值
// }

// //object
// let obj = {
//     a:'0',
//     b:'1',
//     c:'2'
// };
// console.log('------------------------------')
// for(let key in obj){
//     console.log(key);
// }

// for(let val of obj){
//     console.log(val)
// }

//es6手动迭代，iterable 等价于 for..of

for(var val, ret, it = arr[Symbol.iterator](); ( ret = it.next() ) && !ret.done;){
    val = ret.value;
    console.log( val );

};

//for..of 不能遍历对象,可迭代的包括数组，字符串，构造器，collections/typearrays


//string
console.log('----------------------------------');
for(var val of 'hello'){
    console.log(val);   // 'h','l'....

}

//for(x of alls),x 可以是申明也可以是表达式
console.log('-----------------------------')
var o = {};
for({x:o.a} of [{x:1},{x:2},{x:3}]){
    console.log(o.a);   //1,2,3
}

