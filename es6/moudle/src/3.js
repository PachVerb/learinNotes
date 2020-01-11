//m2.js
//模块的整体的加载 
import foo,* as circle from '../libs/m2';

let s = circle.area(4),
    c = circle.circumference(4);

console.log(s,c)
foo()   //11 默认导出从 circle空间分离出，作为3.js顶层作用域绑定。
//模块执行
