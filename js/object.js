/* var obj =new Error;
console.log(obj); */

//訪問對象
//下面情況只能通過[""]訪問對象屬性
/* var obj = {
    Super-Fun:2
} */ 
/* var myojbect = {}
myojbect[Super-Fun] = 2;

console.log(myobject["Super-Fun"]); */
/* 
var obj = {
    [Symbol.somthing]:"hello world"
}
console.log(obj[Symbol.somthing]);  */ 

//es6對象複製，Object.assign(目標對象,元對象)
//沒有深入瞭解es5對象複製
var myobj = {
    a:4,
    b:"hello world",
    c:"i Love you"
};
//修改屬性特性
Object.defineProperty(myobj,"a",{
    value:2,
    writable:true,
    configurable: true,
    enumerable: false
})
//屬性描述符添加屬性
Object.defineProperty(myobj,"b",{
    value:"hello",
    writable:true,
    configurable: true,
    enumerable: true
})
var newobject = Object.assign({},myobj);
newobject.a;
newobject.b;
newobject.c;

console.log(newobject.b);