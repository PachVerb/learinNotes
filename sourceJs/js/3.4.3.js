//Date Error

//date， 使用new关键字
// 指定时间
//date  new Date(datastring)
var time = new Date('1995-12-17T03:24:00'); 
var time2 = new Date();
// console.log(time.getFullYear(), time.getMonth(), time.getSeconds(), time.getDate(), time.getDay())
//new Date(value)
//value整数值, 毫秒值， 表示1970到现在的指定时间差
time = new Date(243234234908);  //
// console.log(time.getFullYear())
// console.log(Date.parse(time2))

//各个时间分量值
//new Date(year, mouth, day, hour, minutes, seconds)
time2 = new Date(2020, 0, 14, 16, 08, 15)
// console.log(time2.getFullYear())

//now,parse..
//now 获取当前时间
// console.log(Date.now() / (24 * 60 * 60 *  1000)) //获取从 1970到当前到天数
//不指定时间
var time3 = new Date();

//不使用new关键字
// console.log(Date() + '--- '+time3)

//Error
//一般错误
function foo(){
    // if(!x){
    //     throw new Error("x wasn't provided");   // 函数是否传入参数，创建错误对象说明情况。
    // }
    console.log(x)
}

// foo()   //Error
// try{
//     // foo()
//     foo(1);  //normal
// }catch(e){
//     console.log(e.message)
//     console.log(e)
// }
//处理特定错误类型。
//js其他几种错误构造.
try{
    foo()
}catch(e){
    if(e instanceof ReferenceError){
        console.log(e.name + '----' + e.message)    //触发此判断
    }else if(e instanceof EvalError){
        console.log(e.name + '----' + e.message)
    }
}
//自定义错误类型。

var obj = {};
console.log(obj)

