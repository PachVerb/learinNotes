//内建消息输入输出
//生成器接受参数， 同样把返回值，作为迭代器对象属性value值。
(function(){
    function *foo(){
        var x = 6;
        var y = x * (yield);    //输入
        return y;
    }
    
    var it = foo(); // --- object, property[value] 属性作为生成器返回值
    var y = it.next(7)  //输出
})()

