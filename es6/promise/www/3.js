// yield 与 next的（双向消息传递系统）

(function () {
    function *foo () {
        (yield 'hello');
        return 'over'
    }
    
    var res = foo();    //构造迭代器
    // next提问： yield給哦返回的是什么呢
    var msg = res.next();   //第一个不传参，用于开启生成器，默认传参被丢弃。无效
        msg.value // hello
        //在次开启 ,询问 yield返回值， 此时return 决定
        msg = res.next()
    console.log(msg.value)  // 'over'
})()