//undefined  undeclared
// Warning
var a;

// 为申明变量 `b` 同样 为undefined
console.log(typeof a);  //undefined
console.log(typeof b);  //undefined

//判断变量为申明情况。
if(typeof a != 'undefined' || !a){
    // typeof a != undefined 筛除 变量已经声明 但值为 unfinded的情况；还有 typeof 为申明变量 为 undefined 情况。
    // 前面的情况楼掉了 变量已经申明，但是值为 undefined情况。 ！a补筛。
    //不能直接对变量引用判断，应为这样直接报 refrenceError.
    console.log('声明');
}else{
    console.error(`a is not declared `)
}


