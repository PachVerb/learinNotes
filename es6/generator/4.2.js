//停止迭代器。for of正常循环结束。自动向迭代器发送结束信号. 
//手动发送信号 return , break

//try finnally终止循环


function *something(){  //前面构建的生成器，作用是生成无限数字序列
    try{
        var nextVal;

        while(true){
            if(nextVal === undefined){
                nextVal = 1;
            }else{  
                nextVal = ( 3 * nextVal ) + 6;
            };

            yield nextVal   
        }
    }finally{
        console.log('clean up')
    }
}

// for(var v of something()){
//     if(v > 500){
//         break;  //触发finaly
//     }
//     console.log(v,something().next());  // done false, 迭代器并没还有停止
// }

//手动终止
var it = something()
for(var v of it){
    console.log(v)
    if(v > 500){
       console.log( it.return ('hello world'))  //done true 迭代器停止
    }
}