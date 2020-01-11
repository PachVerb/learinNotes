//console.log(1);
//类型 语法
//类型
let a = null;
let arry = [1, 2]
console.log(typeof a);	//--> object
//表格打印引用类型数据
console.table(arry);


//查看堆栈中函数调用路径
//场景： 平时我们使用第三方库的时候，如果写法不对，经常可以在控制台看到我们的报错信息，并且像这样打印出了错误位置的堆栈信息。
function foo(a){
    console.trace(a);
}
function bar(a){
    foo(a);
}

bar('lalalal~~~');

//console.time console.timeEnd 统计js代码执行时长。
//统计同步代码执行时间。
// console.time('time')
// setTimeout(() => {
//     console.log('500ms')
// }, 500)
// console.timeEnd('time')

//console.profile console.profileEnd()
function foOF(){
    var arry = ['1', '2', '3'];
    console.log('111');
    for(var val of arry){
        console.log(val)
    }
}
function foIn(){
    var arry = ['1', '2', '3'];
    for(var a in arry){
        console.log(arry[a]);
    }
}

console.profile('测试for');
foOF()
foIn()
console.profileEnd('测试for')