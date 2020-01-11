//值和类型
var a = 'hello';
console.info(typeof a);     // string
    a = true;
console.info(typeof a); // boolean 这里是检测变量实际的值的类型，而不是标识符本身。


//本地项目 引入其他代码时，需要对宿主代码的全局变量判断，如果没有申明则需要三方自己声明，否则就用现成的

