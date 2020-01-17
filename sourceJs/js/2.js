//内部属性 [[class]]
//用于对象内部的分类
// Object.prototype.toString([1, 2, 3]);    //[[object Object]]直接在自定义对象上调用
// Object.prototype.toString('hello'); 

//function.prototype.call
Object.prototype.toString.call([1, 2, 3]);
Object.prototype.toString.call('hello'); 

//null, undefined
Object.prototype.toString.call(null);   //[object null]
Object.prototype.toString.call(undefined); //[object undefined]


