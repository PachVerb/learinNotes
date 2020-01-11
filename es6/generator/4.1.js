//[Symbol.iterator] 返回一个可迭代对象 iterator

function *something(){  //前面构建的生成器，作用是生成无限数字序列
    var nextVal;

    while(true){
        if(nextVal === undefined){
            nextVal = 1;
        }else{  
            nextVal = ( 3 * nextVal ) + 6;
        };

        yield nextVal   
    }
}
var it = something();   //生成器调用，构建iterable
var array = [1, 2]
for(var v of array){
    if(v > 500){
        break;
    }
    console.log(v, array);
}

