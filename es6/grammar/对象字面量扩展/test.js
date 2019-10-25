let x = 10,
    y = 20,
    obj = {
        x,
        y
    };

console.log(obj);

//简洁方法
let o = {
    x: function(){
        //...
    },
    y: function(){
        //...
    }
}
//简写,对于对象方法,可以简写如下形式,实际是函数表达式形式.

let o1 = {
    x(){
        //...
    },
    y(){
        //...
    }
}; 


