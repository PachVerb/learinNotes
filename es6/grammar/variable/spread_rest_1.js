function foo(...args){
    //丢弃第一个元素
    args.shift();
    console.log(...args);
}

function bar(){
    let args = Array.prototype.slice.call(arguments);

    //添加元素 4，5
    args.push(4,5);

    //过滤奇数
    args = args.filter((v) => {
        return v % 2 == 0;
    });

    foo.apply(null, args);  // apply(null/undefined) ,this ---> window
}

bar(1,2,3,4,5,6,7,8,9,10);