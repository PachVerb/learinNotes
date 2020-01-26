var a = 1E20;

var b = ~~a / 10

//| 实现同样的效果, 不过 | 运算符优先级要低于 / 运算符。
b = 1E20 | 0 / 10; 
console.log(b)  
b = (1E20 | 0) / 10
console.log(b)

