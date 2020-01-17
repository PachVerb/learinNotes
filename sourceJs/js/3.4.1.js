//原生函数作为构造函数

//封装
var arr = Array(1, 2, 3); //==》new Array(1, 2, 3)
//原生
var b = [1, 2, 3];

//稀疏数组
var arr2 = new Array(1);    //创建1个空单元数组
// console.log(arr, b, arr2);

//空单元：数组索引位置不包括任何值
//创建空单元， 实际数组长度 length ，为逗号数字减一
c = [,,];
c = [,,,,]
// console.log(c)

//firfox显示相近, 实际式b 包含具体值
var a = Array(3);
b = [undefined, undefined, undefined]
// console.log(a.join('-'));   //''--''
// console.log(b.join('-'))    //''--''
// console.log(a, b);

//空单元数组，与undefined数组有些时候在表现上类似。但又有细微差别, 如上调用join，结果一样； 而调用map事表现差别，a因无任何元素静默失败.相反b是有非空单元数组，success.

//创建undefined数组方法
b = Array.apply(null, {length: 3});
console.log(b)






