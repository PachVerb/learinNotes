//插入表达式,${}
//其中可以是任意合法表达式
// 函数调用,
//在线函数表达式调用
//变量

//函数调用
function upper(s){
    return s.toUpperCase();
}

let who = 'reader',
text1 = `a very ${upper('warn')} welcome to all of you ${upper(`${who}`)}!`;
console.log(text1);


