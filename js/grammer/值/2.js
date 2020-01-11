//字符串的值不可变(成员函数不能改变起原始值，而是返回请字串), 数组的成员函数改变其原始值。
// 共有方法 indeOf charAt concat
var a = [1, 2, 3];
    b = 'foo';

var i = b.toUpperCase();    // FOO
    i == b  //false
    // b = foo
    a.push(4)
console.log(a)

//数组私有 reserve 翻转数组
a.reverse();

console.log(a);


// 字符串反序
//  Array.prototype.reverse.call(b);
//  console.log(b);


//  var c = b.split('').reverse().join('');
//     console.log(c);