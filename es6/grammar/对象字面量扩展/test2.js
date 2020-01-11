import { builtinModules } from "module";

//简洁未命名
function runSomething(o){
    let x = Math.floor(Math.random() * 10 + 1), y = Math.floor(Math.random() * 10 + 1);

    return o.something(x,y);
}
let a = runSomething({
    something: function something(x,y){
        if(x > y){
            return something(y,x);  //递归调用
        }

        return y - x;
    }
});
// console.log(a);

//如果考虑函数简写形式, 此时属性所指向是一个匿名函数，也会出现bug

//递归调用时候，this指向问题. 可以显示绑定 bind()
//或者直接this.[method-name]调用，不过在事件绑定时，this-》 dom
//或者 hack 方法内 保存this
//上面解决方法都不太引人入胜。

//es6简写语法,对于字面量对象方法,
//如果不需要递归调用,或者事件绑定/解绑定,都可以使用简写
// let b = runSomething({
//     something: function something(x,y){
//         if(x > y){
//             return something(y,x);  //递归调用
//         }

//         return y - x;
//     }
// });
//简写
// let b = runSomething({
//     something(x,y){
//         if(x > y){
//             return something(y,x);  //递归调用
//         }

//         return y - x;
//     }
// });

// console.log(b); //referenceError

//事件绑定
// let controller = {
//     i: 1,
//     makeRequest: function() {
//         let self = this;
//         console.log(this.i++)
//             btn.addEventListener('click', function(){
//                 //如果需要内部调用makeRequest
//                 self.makeRequest();
//             }, false);
//     }
// }





