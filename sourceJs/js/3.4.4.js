//Symbol(符号)
//作为属性名, 目的：避免属性重名
//命名私有属性， 替代 _命名私有属性
var obj = {name: 'hello world'};
obj[Symbol.iterator] = function(){}

//自定义Symbol

var mysym = Symbol('my own symbol');
console.log(mysym);
console.log(mysym.toString());
console.log(typeof mysym);  //symbol

obj[mysym] = 'foobar';

// var objSymbols = Object.getOwnPropertySymbols(obj); //getOwnPropertySymbols 返回给定对象所有符号属性数组
var objsymbols = Object.getOwnPropertyNames(obj)    //同上api

console.table(objsymbols)