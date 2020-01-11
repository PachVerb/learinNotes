//迭代器实现任意数字序列
//要求
//生成数字之间存在联系。


//es5闭包实现
var gimmeSomething = (function(){
    var variable;

    return function(){
        if(variable === undefined){
            variable = 1;
        }else{
            variable = variable * 2;
        }
        console.log(variable)
    }
})()

gimmeSomething();  //1     
gimmeSomething();  //2 
gimmeSomething();  //4
gimmeSomething();  //8
//内存泄漏

//迭代器接口实现
var something = (function(){
    var nextVal;

    return {
        [Symbol.iterator]: function(){ return this;},  

        next: function(){
            if(nextVal === undefined){
                nextVal = 1;
            }else{
                nextVal = ( 2 * nextVal);
            }

            return { done: false, value: nextVal }; //done 表示迭代器完成状态
        }
    };
})();

// var g1 = something.next().value;
// var g2 = something.next().value;
// var g3 = something.next().value;
// var g4 = something.next().value;

// console.log( g1, g2, g3, g4);
   
//for of 迭代标准迭代器
//迭代有限iterable合适，比如数组，并在迭代结束。自动结束迭代器
for(var v of something){
    console.log(v, something.next().done);

    if( v < 500 ){  //迭代器根据done的值，确定是否停止迭代。上面迭代器构建的时候done始终未false，因此需要设置 break。手动终止。
        break;
    }
}


