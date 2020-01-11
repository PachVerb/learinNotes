//console.log(1);   //测试
//1. 正则表达式类, regExp(exp, param)
var regExp = new RegExp('[0-9]+','g');
//[], 指代一个字符，里面的字符表示被指代的字符的选择范围
// + 前面的字符出现次数，1次或者1次以上
// 参： g global 全局匹配， 不加 g 匹配到一次为止

var str1 = '1223423423423453445dsdfs234234';
console.log(str1.match(regExp));   //加g 返回不带字母的数字字符
//match 函数里面
//不加 g, 仅仅返回数字前面的数字字符

//直接量,写法 /expression/param
console.log(str1.match(/[0-9]+/g));
console.log(str1.match(/\d+/g));    //等同于上面的写法

//重复字符串 123，不同匹配情况
var str2 = '123123a123';
console.log(str2.match(/123/g));
console.log(str2.match(/(123)+/g))

//正则表达式对象的test方法
var RegExp2 = /[0-9]+/g  //typeof  ... == object
console.log(typeof(RegExp2));   //object
console.log(RegExp2.test(str2));    //true，test方法只匹配一次，正确为true,否则为false
