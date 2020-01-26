// 位运算符 ～ | !

var a = Math.pow(2, 30);

var b = 0 | a;

//~ , ~x === -(x+1)
a = 3
console.log(~a);    // -4

//~ 字位运算符
a = "hello world";
if(a.indexOf('lo')){
    console.log('匹配')
}
if(a.indexOf('lo') != -1){
    console.log('匹配到')
}
if(a.indexOf('ol') < 0){
    console.log('无匹配')
}

if(a.indexOf('ol') == -1){
    console.log('无匹配')
}
//如上写法为抽象泄漏，露出程序底层原理。通常不这样写

//～ 实现上面程序

console.log(~a.indexOf("lo"));
//indexof()匹配结果返回 -1, 则说明没有匹配到。 ～-1将其转换为假值 0. 
if(~a.indexOf('lo')){
    console.log('匹配' + a.indexOf('lo'))
}

if(!~a.indexOf('ol')){
    console.log('不匹配' + a.indexOf('ol'))
}

//字位解除
//～～第一个～首先将数值进行toInt32然后在反转，然后在反转回来。
console.log(~~(Math.random()  + 1 ))
a = 49.6;
b = -25.2;
console.log(Math.floor(a))
console.log(~~a)
console.log(Math.floor(b))
console.log(~~b)
console.log(a | 0)
console.log(b | 0)




