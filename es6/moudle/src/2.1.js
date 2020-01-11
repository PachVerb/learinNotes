//m1.1.js
import {firstName as a, lastName as b, year as c, obj as o} from '../libs/m1.1'
// from 模块路径和名字，路径可以省略带但要配置指定模块位置；模块扩展名可省略。
//firsetName。。。 接口只读，接口在加载过后无法在修改

//更改导入后的接口
// a = '2'  syntax Error : a is read-only

//导出的接口是对象，可以更改接口属性值
o.b = 4;    //right
console.log(o)  //{b:4}


